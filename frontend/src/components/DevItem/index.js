import React from 'react';
import { MdDelete } from 'react-icons/md';

import { DevItem, UserInfo } from './styles';

export default function Item({ dev, onDelete }) {
  async function handleDelete(id){
    await onDelete(id);
  }

  return (
    <DevItem>
      <header>
        <div>
          <img src={dev.avatar_url} alt={dev.name} />

          <UserInfo>
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </UserInfo>
        </div>

        <button type="button" onClick={() => handleDelete(dev._id)}>
          <MdDelete color="#f00" size={24} />
        </button>
      </header>
      <p>{dev.bio}</p>
      <a
        href={`https://github.com/${dev.github_username}`}
        target="blank"
      >
        Acessar perfil no Github
      </a>
    </DevItem>
  );
}
