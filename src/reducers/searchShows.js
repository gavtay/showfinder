const searchShowsReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATESEARCH':
            return action.searchEvent
        default:
            return state
    }
}
export default searchShowsReducer;