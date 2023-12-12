import { useDispatch } from 'react-redux';
import { showcreateprofile } from './actions';
import './CreateProfile.css';

function CreateProfile() {
    const dispatch = useDispatch();

    return (
        <>
            <div id='create-profile-container'>
                <div id='create-profile-main'>
                    <div id='create-profile-header-container'>
                        <h1 id='create-profile-header'>Create New Profile</h1>
                        <button
                            id='create-profile-close'
                            onClick={()=>dispatch(showcreateprofile())}
                        >
                            X
                        </button>
                    </div>
                    <div id='create-profile-input-container'>
                        <input id='create-profile-input' placeholder='Profile Name'></input>
                        <button
                            id='create-profile-submit-btn'
                            // onClick={()=>dispatch(whatever is in the input)}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateProfile;