import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import DevForm from '../../components/DevForm';
import DevItem from '../../components/DevItem';

import { Aside, MainDiv, DevList } from './styles';

export default function Main() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data.devs);
    }

    loadDevs();
  }, []);

  async function handleSubmit(data) {

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  async function handleDelete(id) {
    await api.delete(`/devs/${id}`);

    setDevs(devs.filter(dev => dev._id !== id));
  }

  return (
    <>
      <Aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSubmit} />
      </Aside>

      <MainDiv>
        <DevList>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} onDelete={handleDelete}/>
          ))}
        </DevList>
      </MainDiv>
    </>
  );
}
