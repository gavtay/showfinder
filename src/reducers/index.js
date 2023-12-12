import showProfileDropdownMenuReducer from './showProfileDropdownMenu';
import userProfileArrayReducer from './userProfileArray';
import scrollPopularReducer from './showPopularScroll';
import selectProfileReducer from './selectProfile';
import scrollMostReducer from './showMostScroll';
import scrollNewReducer from './showNewScroll';
import showDetailsReducer from './showDetails';
import searchShowsReducer from './searchShows';
import shhowCreateProfileRedcuer from './showCreateProfile';

import { combineReducers } from 'redux';
import showCreateProfileReducer from './showCreateProfile';

const allReducers = combineReducers({
    scrollPop: scrollPopularReducer,
    selectProf: selectProfileReducer,
    scrollNew: scrollNewReducer,
    scrollMost: scrollMostReducer,
    showDet: showDetailsReducer,
    searchShows: searchShowsReducer,
    userProfileArray: userProfileArrayReducer,
    showProfileDrop: showProfileDropdownMenuReducer,
    showCreateProfile: showCreateProfileReducer
});
export default allReducers;