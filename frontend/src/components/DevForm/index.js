import React, { useState, useEffect } from 'react';

import { InputBlock, InputGroup, Button } from './styles';

export default function DevForm({ onSubmit }) {

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude)
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );

  }, []);

  async function handleSubmit(e){
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputBlock>
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          id="github_username"
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          required
        />
      </InputBlock>

      <InputBlock>
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
          required
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="longetude">Longetude</label>
          <input
            type="number"
            name="longetude"
            id="longetude"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            required
          />
        </InputBlock>
      </InputGroup>

      <Button type="submit">Salvar</Button>
    </form>
  );
}
