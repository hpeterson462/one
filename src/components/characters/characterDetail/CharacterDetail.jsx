import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../../hooks/characters';
import PropTypes from 'prop-types';
import CharacterImg from '../characterImg/CharacterImg';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, character } = useCharacterById(id);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <CharacterImg />

      <section data-testid='character'>
        <h1>{character.name}</h1>
        <h3>{character.race}</h3>
        <h3>{character.gender}</h3>
        <a
          className="ext-link"
          target="_blank"
          href={character.wikiUrl}>
          <h4>{character.wikiUrl}</h4>
        </a>
      </section>
      <button onClick={() => window.history.back('/list')}>
        Back
      </button>
    </>
  );
};

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    wikiUrl: PropTypes.string.isRequired,
  })).isRequired
};

export default CharacterDetail;
