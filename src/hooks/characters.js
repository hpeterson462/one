import { useState, useEffect } from 'react';
import { getApi, getApiById } from '../services/api';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApi()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};

export const useCharacterById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getApiById(id)
      .then(character => setCharacter(character)
      )
      .finally(() => setLoading(false));
  }, [id]);

  console.log(character);

  return {
    loading,
    character
  };
};
