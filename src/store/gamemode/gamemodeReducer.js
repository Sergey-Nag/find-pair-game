import GAMEMODE_CHANGE from './gamemodeTypes';

function gamemodeReducer(state = 'easy', action) {
  switch (action.type) {
    case GAMEMODE_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

export default gamemodeReducer;
