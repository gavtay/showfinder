const showProfileDropdownMenuReducer = (state = false, action) => {
    switch(action.type) {
        case 'SHOWPROFILEDROPDOWNMENU':
            return !state
        default:
            return state
    }
}
export default showProfileDropdownMenuReducer;