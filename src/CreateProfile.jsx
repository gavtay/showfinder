import { useDispatch, useSelector } from 'react-redux';
import { showcreateprofile, profileinput, addprofile} from './actions';
import './CreateProfile.css';

function CreateProfile() {
    const profileInp = useSelector(state => state.profileInput);
    const dispatch = useDispatch();

    function addNewProfile() {
        dispatch(addprofile(profileInp));
    }

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
                        <input
                            id='create-profile-input'
                            type='text'
                            value={profileInp}
                            placeholder='Profile Name'
                            onChange={(event)=>dispatch(profileinput(event.target.value))}>
                        </input>
                        <button
                            id='create-profile-submit-btn'
                            onClick={addNewProfile}
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