// import { useSelector } from "react-redux";

// const profileArray = useSelector(state => state.userProfileArray);

const deleteProfileReducer = (state = [], action) => {
    switch(action.type) {
        case 'DELETEPROFILE':
            return {
                ...state,
                // state.filter((element)=> element !== action.remove)
            }
        default:
            return state
    }
}
export default deleteProfileReducer;