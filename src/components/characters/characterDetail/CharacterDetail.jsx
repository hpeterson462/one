import React from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../../hooks/characters';
import PropTypes from 'prop-types';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, character } = useCharacterById(id);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <section data-testid="character">
        <p>{character.name}</p>
        <p>{character.race}</p>
        <p>{character.gender}</p>
        <p>{character.wikiUrl}</p>
      </section>
      <button onClick={() => window.history.back('/')}>
        Back
      </button>
    </>
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

export default CharacterDetail;
