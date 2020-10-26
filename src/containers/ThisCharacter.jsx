import React from 'react'
import CharacterList from '../components/app/List/List';
import { getApi } from '../services/api';

const TheseCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApi()
      .then(characters => setCharacters(characters))
  }, []);

  return (
    <CharacterList characters={characters} />
  );
};

export default TheseCharacters;
