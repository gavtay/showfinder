const userProfileArrayReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADDPROFILE':
            return [...state, action.name]
        case 'DELETEPROFILE':
            return state.filter(obj => action.name !== obj)
        default:
            return state
    }
}
export default userProfileArrayReducer;