import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { deleteprofile, showdeleteprofilebox } from './actions';
import { useSelector, useDispatch } from 'react-redux'
import './DeleteProfileBox.css'

const checkBtn = <FontAwesomeIcon id="check-icon" icon={faCheck} style={{color: "#00ff00", fontSize: "x-large" }} />
const xBtn = <FontAwesomeIcon id="x-icon" icon={faX} style={{color: "#ff0000", fontSize: "x-large" }} />

function DeleteProfileBox() {
    const showProfileBox = useSelector(state => state.showDeleteProfileBox);
    const delProfileName = useSelector(state => state.profileName);
    const dispatch = useDispatch();

    function showProfile() {
        if (showProfileBox) {
            return (
                <>
                    <div id='show-profile-box-container'>
                        <div id='show-profile-delete-container'>
                            <h2>Delete this profile?</h2>
                            <div id='show-profile-delete-btn-container'>
                                <button 
                                    id='btn'
                                    onClick={()=> {
                                        dispatch(deleteprofile(delProfileName))
                                        dispatch(showdeleteprofilebox())
                                    }}
                                >
                                    {checkBtn}
                                </button>
                                <button 
                                    id='btn'
                                    onClick={()=>dispatch(showdeleteprofilebox())}
                                >
                                    {xBtn}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
    
    return (
        <>
            {showProfile()}
        </>
    )
}
export default DeleteProfileBox;