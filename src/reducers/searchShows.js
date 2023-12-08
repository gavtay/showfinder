const searchShows = (state = '', action) => {
    switch(action.type) {
        case 'UPDATESEARCH':
            return action.searchEvent
        default:
            return state
    }
}
export default searchShows;