import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddProfile.css';

const profilePlus = <FontAwesomeIcon id="plus-icon" icon={faPlus} style={{color: "#000000", fontSize: "xx-large"}} />

function AddProfile() {

    const toggleAddProfile = 'State called here to render add profile box';

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