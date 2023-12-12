import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';
import CreateProfile from './CreateProfile.jsx';
import { useSelector } from 'react-redux';
import './ProfileSelect.css';

function ProfileSelect() {
    const createProfile = useSelector(state => state.showCreateProfile);

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
                    <Profile />
                    <AddProfile />
                </div>
            </div>
            {checkCreateProfile()}
        </>
    )
}
export default ProfileSelect;