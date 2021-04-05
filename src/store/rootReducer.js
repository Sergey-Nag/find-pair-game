import { combineReducers } from 'redux';
import leaderboardReducer from './leaderboard/leaderboardReducer';
import gamemodeReducer from './gamemode/gamemodeReducer';
import cardsReducer from './cards/cardsReducer';
import playerReducer from './player/playerReducer';
import gameReducer from './game/gameReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  gamemode: gamemodeReducer,
  leaderboard: leaderboardReducer,
  cards: cardsReducer,
  game: gameReducer,
});

export default rootReducer;
