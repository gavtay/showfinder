import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch } from './actions';
import './Header.css';

const checkBtn = <FontAwesomeIcon id="search-icon" icon={faSearch} style={{color: "#ffffff"}} />

function searchInputChange(event, dispatch) {
    dispatch(updateSearch(event.target.value));
}

function Header() {
    const searchShows = useSelector(state => state.searchShows);
    const dispatch = useDispatch();

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
                </div>
            </div>
        </>
    )
}
export default Header;