import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={`${character._id}`}>
      <span>{character.name}</span>
    </li>
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
