import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../../hooks/characters';
import { Link } from 'react-router-dom';
import styles from './CharacterList.css';

const CharacterList = () => {
  const { loading, characters } = useCharacters();

  if (loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <Link to={`/details/${character._id}`} key={`${character._id}`}>
      <li key={`${character._id}`}>
        <span>{character.name}</span>
      </li>
    </Link>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
