const showDeleteProfileBoxReducer = (state = false, action) => {
    switch(action.type) {
        case 'SHOWDELETEPROFILEBOX':
            return !state
        default:
            return state
    }
}
export default showDeleteProfileBoxReducer;