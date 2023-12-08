const scrollPopularReducer = (state = 0, action) => {
    switch(action.type) {
        case 'SCROLLRIGHTPOP':
            return state + 1 
        case 'SCROLLLEFTPOP':
            return state - 1
        default:
            return state
    }
}
export default scrollPopularReducer;