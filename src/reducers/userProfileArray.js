const userProfileArrayReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADDPROFILE':
            return [...state, action.name]
        default:
            return state
    }
}
export default userProfileArrayReducer;