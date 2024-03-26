import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { selectprofile, deleteprofilename, showdeleteprofilebox } from '../actions';
import './Profile.css';

const profileUser = <FontAwesomeIcon id="plus-icon" icon={faUser} style={{color: "#000000", fontSize: "xx-large"}} />

function Profile({ name, index }) {
    const dispatch = useDispatch();

    const profileSelected = () => {
        dispatch(selectprofile(name));
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
                <h3>{name}</h3>
                <button
                    id='profile-delete-btn'
                    onClick={()=> {
                        dispatch(showdeleteprofilebox())
                        dispatch(deleteprofilename(name))
                    }}
                    >X
                </button>
            </div>
        </>
    )
}
export default Profile;