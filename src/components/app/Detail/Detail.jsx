import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  return (
    <section data-testid="character">
      <p>{character.name}</p>
      <p>{character.race}</p>
      <p>{character.gender}</p>
      <p>{character.wikiUrl}</p>
    </section>
  );
};

// Character.propTypes = {
//   character: PropTypes.array().isRequired
// }
// // name: PropTypes.string.isRequired,
// // race: PropTypes.string.isRequired,
// // gender: PropTypes.string.isRequired,
// // wikiUrl: PropTypes.string.isRequired,
// // ).isRequired
// // };

export default Character;
