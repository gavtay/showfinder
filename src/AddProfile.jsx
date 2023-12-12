import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { showcreateprofile } from './actions';
import './AddProfile.css';

const profilePlus = <FontAwesomeIcon id="plus-icon" icon={faPlus} style={{color: "#000000", fontSize: "xx-large"}} />

function AddProfile() {
    const dispatch = useDispatch();

    function toggleAddProfile() {
        dispatch(showcreateprofile());
    }

    return (
        <>
            <div id='addprofile-container'>
                <button
                    id='addprofile-btn'
                    onClick={toggleAddProfile}
                >
                    <p 
                        id='Addprofile-btn-icon'
                    > 
                        {profilePlus}
                    </p>
                </button>
                <h3>Add Profile</h3> 
            </div>
        </>
    )
}
export default AddProfile;