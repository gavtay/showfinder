const showDetailsReducer = (state = '', action) => {
    switch(action.type) {
        case 'SHOWDETAILS':
            return action.object.target.alt  
        case 'CLOSEDETAILS':
            return ''
        default:
            return state
    }
}
export default showDetailsReducer;