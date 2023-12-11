import Profile from './Profile.jsx';
import AddProfile from './AddProfile.jsx';
import './ProfileSelect.css';

function ProfileSelect() {
    return (
        <>
            <div id="profile-select-container">
                <h1 id='profile-select-header'>Select Your Profile</h1>
                <div id='profiles-container'>
                    <Profile />
                    <AddProfile />
                </div>
            </div>
        </>
    )
}
export default ProfileSelect;