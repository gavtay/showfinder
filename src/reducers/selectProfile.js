const selectProfileReducer = (state = '', action) => {
    switch(action.type) {
        case 'SELECTPROFILE':
            return action.name
        case 'SIGNOUTPROFILE':
            return ''
        default:
            return state
    }
}
export default selectProfileReducer;