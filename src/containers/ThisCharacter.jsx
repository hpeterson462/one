import React, { useState, useEffect } from 'react';
import Character from '../components/app/Detail/Detail';
import { getApiById } from '../services/api';

const ThisCharacter = ({ match }) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const params = match.params;
    const characterId = Object.values(params);
    getApiById(characterId)
      .then(character => setCharacter(character))

  }, []);

  return (
    <Character character={character} />
  )
};

export default ThisCharacter;
