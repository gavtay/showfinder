const showMostScrollReducer = (state = 0, action) => {
    switch(action.type) {
        case 'SCROLLRIGHTMOST':
            return state + 1
        case 'SCROLLLEFTMOST':
            return state - 1
        default:
            return state
    }
}
export default showMostScrollReducer;