import { combineReducers } from 'redux';
import leaderboardReducer from './leaderboard/leaderboardReducer';
import gamemodeReducer from './gamemode/gamemodeReducer';
import cardsReducer from './cards/cardsReducer';

const rootReducer = combineReducers({
  gamemode: gamemodeReducer,
  leaderboard: leaderboardReducer,
  cards: cardsReducer,
});

export default rootReducer;
