const showCreateProfileReducer = (state = false, action) => {
    switch(action.type) {
        case 'SHOWCREATEPROFILE':
            return !state
        default:
            return state
    }
}
export default showCreateProfileReducer;