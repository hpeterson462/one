import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, race, gender, wikiUrl }) => (
  <>
    <section data-testid="character">
      <p>Name{name}</p>
      <p>{race}</p>
      <p>{gender}</p>
      <p>{wikiUrl}</p>
    </section>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  wikiUrl: PropTypes.string.isRequired
};

export default Character;
