import { useSelector } from 'react-redux';
import ShowDetails from './ShowDetails.jsx';
import Showallshows from './Search.jsx';
import Category from './Category.jsx';

function toggleView(showDet, searchShows) {

    if (searchShows) {
        if (showDet.length > 0) {
            return (
                <>
                    <ShowDetails />
                </>
            )
        }
        return ( <Showallshows /> )
    }
        
        if (showDet.length > 0) {
            return (
                <>
                    <ShowDetails />
                </>
            )
        }
        else {
            return (
                <>
                    <Category title='Popular'/>
                    <Category title='New'/>
                    <Category title='Most Episodes'/>
                </>
            )
        }
        
    return (
        <>
            <Category title='Popular'/>
            <Category title='New'/>
            <Category title='Most Episodes'/>
        </>
    )
}

function Mainview() {
    const showDet = useSelector(state => state.showDet);
    const searchShows = useSelector(state => state.searchShows);

    return (
        <>
            {toggleView(showDet, searchShows)}
        </>
    )
}
export default Mainview;