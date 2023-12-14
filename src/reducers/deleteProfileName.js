const deleteProfileNameReducer = (state = '', action) => {
    switch(action.type) {
        case 'DELETEPROFILENAME':
            return action.name
        default:
            return state
    }
}
export default deleteProfileNameReducer;