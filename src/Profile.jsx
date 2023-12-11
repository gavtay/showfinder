import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import './Profile.css';
import { selectprofile } from './actions';

const profileUser = <FontAwesomeIcon id="plus-icon" icon={faUser} style={{color: "#000000", fontSize: "xx-large"}} />

function Profile() {
    let profileName = 'Bob';
    const dispatch = useDispatch();

    const profileSelected = () => {
        console.log(profileName);
        dispatch(selectprofile(profileName));
    }

    return (
        <>
            <div id='profile-container'>
                <button
                    id='profile-btn'
                    onClick={profileSelected}
                >
                    <p 
                        id='profile-btn-icon'
                        alt='person outline'
                    > 
                        {profileUser}
                    </p>
                </button>
                <h3>{profileName}</h3>
            </div>
        </>
    )
}
export default Profile;