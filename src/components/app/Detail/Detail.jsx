import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, race, gender, wikiUrl }) => (
  <>
    <p>{name}</p>
    <p>{race}</p>
    <p>{gender}</p>
    <p>{wikiUrl}</p>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  wikiUrl: PropTypes.string.isRequired,
};

export default Character;
