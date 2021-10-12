// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Character from '../components/characters/characterDetail/CharacterDetail';
// import { getApiById } from '../services/api';

// const CharacterDetail = ({ match }) => {
//   const [character, setCharacter] = useState({
//     name: '',
//     race: '',
//     gender: '',
//     wikiUrl: ''
//   });

//   useEffect(() => {
//     getApiById(match.params.id)
//       .then(character => setCharacter(character)
//       )
//   }, []);

//   console.log(character);

//   return (
//     <div>
//       <Character character={character} />
//     </div>
//   )
// };

// CharacterDetail.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       characterId: PropTypes.string.isRequired
//     }).isRequired
//   }).isRequired
// };

// export default CharacterDetail;
