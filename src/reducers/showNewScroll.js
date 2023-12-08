const showNewScrollReducer = (state = 0, action) => {
    switch(action.type) {
        case 'SCROLLRIGHTNEW':
            return state + 1
        case 'SCROLLLEFTNEW':
            return state - 1
        default:
            return state
    }
}
export default showNewScrollReducer;