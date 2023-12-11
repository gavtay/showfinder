import scrollPopularReducer from './showPopularScroll';
import selectProfileReducer from './selectProfile';
import scrollMostReducer from './showMostScroll';
import scrollNewReducer from './showNewScroll';
import showDetailsReducer from './showDetails';
import searchShowsReducer from './searchShows';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    scrollPop: scrollPopularReducer,
    selectProf: selectProfileReducer,
    scrollNew: scrollNewReducer,
    scrollMost: scrollMostReducer,
    showDet: showDetailsReducer,
    searchShows: searchShowsReducer
});
export default allReducers;