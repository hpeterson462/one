import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../components/app/Detail/Detail';
import { getApiById } from '../services/api';

const ThisCharacter = ({ match }) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const characterId = match.params.characterId;
    getApiById(characterId)
      .then(character => setCharacter(character)
      )
  }, []);

  console.log(character);

  return (
    <Character name={character.name} race={character.race} gender={character.gender} wikiUrl={character.wikiUrl}
    />
  )
};

ThisCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      characterId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ThisCharacter;
