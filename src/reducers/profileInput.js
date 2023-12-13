const profileInputReducer = (state = '', action) => {
    switch(action.type) {
        case 'PROFILEINPUT':
            return action.event
        case 'CLEARPROFILEINPUT':
            return state = ''
        default:
            return state
    }
} 
export default profileInputReducer;