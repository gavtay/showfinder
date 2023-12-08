import scrollPopularReducer from './showPopularScroll';
import scrollNewReducer from './showNewScroll';
import scrollMostReducer from './showMostScroll';
import showDetailsReducer from './showDetails';
import searchShows from './searchShows';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    scrollPop: scrollPopularReducer,
    scrollNew: scrollNewReducer,
    scrollMost: scrollMostReducer,
    showDet: showDetailsReducer,
    searchShows
});
export default allReducers;