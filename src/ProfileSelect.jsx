import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';
import CreateProfile from './CreateProfile.jsx';
import { useSelector } from 'react-redux';
import './ProfileSelect.css';

function ProfileSelect() {
    const createProfile = useSelector(state => state.showCreateProfile);
    const profileArray = useSelector(state => state.userProfileArray);

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

    return (
        <>
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