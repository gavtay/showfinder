const profileInputReducer = (state = '', action) => {
    switch(action.type) {
        case 'PROFILEINPUT':
            return action.event
        default:
            return state
    }
} 
export default profileInputReducer;