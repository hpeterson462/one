import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../../hooks/characters';
import fangornForest from '../../../assets/fangornForest.png';
import shadowAndFlame from '../../../assets/shadowAndFlame.png';
import landOfShadow from '../../../assets/landOfShadow.png';
import greatEastRoad from '../../../assets/greatEastRoad.png';
import clouds from '../../../assets/clouds.png';
import eaglesEyrie from '../../../assets/eaglesEyrie.png';
import arda from '../../../assets/arda.png';
import ettenmoors from '../../../assets/ettenmoors.png';
import mordor from '../../../assets/mordor.png';
import shire from '../../../assets/shire.png';
import ironHills from '../../../assets/ironHills.png';
import lothlorien from '../../../assets/lothlorien.png';
import forest from '../../../assets/forest.png';

export default function CharacterImg() {
  const { id } = useParams();
  const { loading, character } = useCharacterById(id);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <img
        style={{ width: '25%' }}
        src={
          character.race === 'Ent' ?
            fangornForest
            : character.race === 'Balrog' ?
              shadowAndFlame
              : character.race === 'Men,Wraith' ?
                landOfShadow
                : character.race === 'Great Eagles' ?
                  eaglesEyrie
                  : character.race === 'Stone-trolls' ?
                    ettenmoors
                    : character.race === 'Ainur' ?
                      arda
                      : character.race === 'Maiar' ?
                        clouds
                        : character.race === 'Hobbit' ?
                          shire
                          : character.race === 'Human' ?
                            greatEastRoad
                            : character.race === 'Men' ?
                              greatEastRoad
                              : character.race === 'Dwarf' ?
                                ironHills
                                : character.race === 'Dwarves' ?
                                  ironHills
                                  : character.race === 'Elf' ?
                                    lothlorien
                                    : character.race === 'Elves' ?
                                      lothlorien
                                      : character.race === 'NaN' ?
                                        forest
                                        : mordor
        }
        alt={
          character.race === 'Ent' ?
            'Fangorn Forest'
            : character.race === 'Balrog' ?
              'Shadow and flame'
              : character.race === 'Men,Wraith' ?
                'The Land of Shadow'
                : character.race === 'Great Eagles' ?
                  'Eagles Eyrie'
                  : character.race === 'Stone-trolls' ?
                    'Ettenmoors'
                    : character.race === 'Ainur' ?
                      'Arda'
                      : character.race === 'Maiar' ?
                        'Light filled clouds'
                        : character.race === 'Hobbit' ?
                          'The Shire'
                          : character.race === 'Human' ?
                            'The Great East Road'
                            : character.race === 'Men' ?
                              'The Great East Road'
                              : character.race === 'Dwarf' ?
                                'Iron Hills'
                                : character.race === 'Dwarves' ?
                                  'Iron Hills'
                                  : character.race === 'Elf' ?
                                    'Lothlorien'
                                    : character.race === 'Elves' ?
                                      'Lothlorien'
                                      : character.race === 'NaN' ?
                                        'Forest'
                                        : 'Mordor'
        }
      />
    </>
  )
}
