import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, signoutprofile, showprofiledropdownmenu } from './actions';
import './Header.css';

const checkBtn = <FontAwesomeIcon id="search-icon" icon={faSearch} style={{color: "#ffffff"}} />
const profileUser = <FontAwesomeIcon id="plus-icon" icon={faUser} style={{color: "#ffffff"}} />
const signOutBtn = <FontAwesomeIcon id="plus-icon" icon={faArrowRightFromBracket} style={{color: "#ff3b3b"}} />

function searchInputChange(event, dispatch) {
    dispatch(updateSearch(event.target.value));
}

function Header() {
    const searchShows = useSelector(state => state.searchShows);
    const profileSelect = useSelector(state => state.selectProf);
    const dropDown = useSelector(state => state.showProfileDrop)
    const dispatch = useDispatch();
    
    
    function showProfileDropdown() {
        if (dropDown === true) {
            return (
                <>
                    <div id='dropdown-container'>
                        <p id='profile-dropdown-hello'>Hello, {profileSelect}</p>
                        <hr className='profile-dropdown-line'/>
                    <button
                        id='profile-dropdown-signout'
                        onClick={signOut}
                        >
                        {signOutBtn} Sign Out
                    </button>
            </div>
                </>
            )
        }
    }
    
    function toggleProfileDropDown() {
        dispatch(showprofiledropdownmenu())
    }

    function signOut() {
        dispatch(signoutprofile());
        dispatch(showprofiledropdownmenu())
    }

    return (
        <>
            <div id='header-container'>
                <h1 id='header-title'>Taynime</h1>
                <div id='header-search-container'>
                    <p id='header-search-icon'>{checkBtn}</p>
                    <input
                        id='header-search-bar'
                        type='text'
                        placeholder='Search'
                        value={searchShows}
                        onChange={(event)=>searchInputChange(event, dispatch)}
                    >
                    </input>
                    <button
                        id='header-profile-icon'
                        onClick={toggleProfileDropDown}
                    >
                        {profileUser}
                    </button>
                </div>
            </div>
            {showProfileDropdown()}
        </>
    )
}
export default Header;