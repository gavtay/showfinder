import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const profileUser = <FontAwesomeIcon id="plus-icon" icon={faUser} style={{color: "#000000", fontSize: "xx-large"}} />

function Profile() {
    return (
        <>
            <div id='profile-container'>
                <button
                    id='profile-btn'>
                    <p 
                        id='profile-btn-icon'
                        alt='person outline'
                    > 
                        {profileUser}
                    </p>
                </button>
                <h3>Profile Name</h3>
            </div>
        </>
    )
}
export default Profile;