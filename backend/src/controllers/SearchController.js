const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

class SearchController {

  //fetch all Dev within 10k radius
  //filter by technologies
  async index(req, res) {
    try {
      const { latitude, longitude, techs  } = req.query;

      const techsArray = parseStringAsArray(techs);

      const devs = await Dev.find({
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude]
            },
            $maxDistance:  10000,
          }
        }
      }).sort({ createdAt: -1 });

      return res.json({ devs });
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  }
}

module.exports = new SearchController();
