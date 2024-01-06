/* eslint-disable react/prop-types */

import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  //State
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  //Functions
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  //Variables
  let editablePlayerName = <span className='player-name'>{playerName}</span>;

  //Logic
  if (isEditing) {
    editablePlayerName = (
      <input type='text' required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
};

export default Player;
