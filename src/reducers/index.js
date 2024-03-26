import showProfileDropdownMenuReducer from './showProfileDropdownMenu';
import userProfileArrayReducer from './userProfileArray';
import scrollPopularReducer from './showPopularScroll';
import selectProfileReducer from './selectProfile';
import scrollMostReducer from './showMostScroll';
import scrollNewReducer from './showNewScroll';
import showDetailsReducer from './showDetails';
import searchShowsReducer from './searchShows';
import showCreateProfileReducer from './showCreateProfile';
import profileInputReducer from './profileInput';
import showDeleteProfileBoxReducer from './showDeleteProfileBox';
import deleteProfileNameReducer from './deleteProfileName';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    scrollPop: scrollPopularReducer,
    selectProf: selectProfileReducer,
    scrollNew: scrollNewReducer,
    scrollMost: scrollMostReducer,
    showDet: showDetailsReducer,
    searchShows: searchShowsReducer,
    userProfileArray: userProfileArrayReducer,
    showProfileDrop: showProfileDropdownMenuReducer,
    showCreateProfile: showCreateProfileReducer,
    profileInput: profileInputReducer,
    showDeleteProfileBox: showDeleteProfileBoxReducer,
    profileName: deleteProfileNameReducer
});
export default allReducers;