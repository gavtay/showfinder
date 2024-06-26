import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';
import CreateProfile from './CreateProfile.jsx';
import DeleteProfileBox from '../main_view/DeleteProfileBox.jsx';
import { useSelector } from 'react-redux';
import './ProfileSelect.css';

function ProfileSelect() {
    const createProfile = useSelector(state => state.showCreateProfile);
    const profileArray = useSelector(state => state.userProfileArray);
    const removeProfile = useSelector(state => state.showDeleteProfileBox);

    function populateProfiles() {
        return (
            <>
                {
                    profileArray.map((ele, index) => (
                        <Profile name={ele} index={index}/>
                    ))
                }
            </>
        )
    }

    function populateAddProfile() {
        let arrayLength = profileArray.length;

        if (arrayLength < 5) {
            return (
                <>
                    <AddProfile />
                </>
            )
        }
    }

    function checkCreateProfile() {
        if (createProfile) {
            return (
                <CreateProfile />
            )
        }
    }
    function checkRemoveProfile() {
        if (removeProfile) {
            return (
                <DeleteProfileBox />
            )
        }
    }

    return (
        <>
            {checkRemoveProfile()}
            <div id="profile-select-container">
                <h1 id='profile-select-header'>Select Your Profile</h1>
                <div id='profiles-container'>
                    {populateProfiles()}
                    {populateAddProfile()}
                </div>
            </div>
            {checkCreateProfile()}
        </>
    )
}
export default ProfileSelect;