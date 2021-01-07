import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../components/app/Detail/Detail';
import { getApiById } from '../services/api';

const ThisCharacter = ({ match }) => {
  const [character, setCharacter] = useState({
    name: '',
    race: '',
    gender: '',
    wikiUrl: ''
  });

  useEffect(() => {
    getApiById(match.params.id)
      .then(character => setCharacter(character)
      )
  }, []);

  console.log(character);

  return (
    <div>
      <Character character={character} />
    </div>
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
