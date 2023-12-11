const selectProfileReducer = (state = '', action) => {
    switch(action.type) {
        case 'SELECTPROFILE':
            return action.name
        default:
            return state
    }
}
export default selectProfileReducer;