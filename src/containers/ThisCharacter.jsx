import React, { useState, useEffect } from 'react';
import Character from '../components/app/Detail/Detail';
import { getApiById } from '../services/api';

const ThisCharacter = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getApiById()
      .then(character => setCharacter(character))
  }, []);

  return (
    <Character character={character} />
  )
};

export default ThisCharacter;
