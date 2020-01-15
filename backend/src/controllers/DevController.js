const Dev = require('../models/Dev');
const gitApi = require('../services/gitAxios');
const parseStringAsArray = require('../utils/parseStringAsArray');

class DevController {
  async index(req, res) {
    try {
      const devs = await Dev.find({}).sort({createdAt: -1});

      return res.json({ devs });
    } catch (error) {
      return res.json(error);
    }
  }

  async store(req, res) {
    try {
      const { github_username, techs, latitude, longitude } = req.body;

      const devExists = await Dev.findOne({ github_username });

      if(devExists)
        return res.json({ success: false, message: 'Dev already exists' });

      const response = await gitApi.get(`/users/${github_username}`);

      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

      const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });

      return res.json(dev);
    } catch (error) {
      return res.json(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const dev = await Dev.findOneAndUpdate({ _id: id }, req.body);

      if(!dev)
        return res.status(400).json({ success: false, message: 'Dev not found' });

      return res.json({ success: true, dev });
    } catch (error) {
      return res.json(error);
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const dev = await Dev.findOneAndDelete({ _id: id });

      if(!dev)
        return res.status(400).json({ success: false, message: 'Dev not found' });

      return res.json({ success: true, dev });
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = new DevController();
