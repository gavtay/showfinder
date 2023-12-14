import Show from './Show.jsx';
import { useSelector } from 'react-redux';
import './Search.css';
import {data} from './moviedata.js';

function Showallshows() {
    const searchShows = useSelector(state => state.searchShows);
    let dataObj = []
    let emptyStr = '';

    function populateShowsInSearch() {
        for (let i = 0; i < data.length; ++i) {
            dataObj.push(data[i]);
        }

        dataObj = dataObj.filter((obj) => {
            let str = searchShows.toLowerCase();
            let objTitle = obj.title.toLowerCase();

            if (objTitle.includes(str)) {
                return obj;
            }
        })

        if (dataObj.length === 0) {
            return (
                <>
                    <div id='search-no-shows-container'>
                        <p id='search-no-shows-header'>No shows in the database match your description...</p>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    {
                        dataObj.map((obj) => (
                            <Show key={obj.id} showObj={obj} title={emptyStr}/>
                        )) 
                    }
                </>
            )
        }
    }

    return(
        <>
            <div id='search-container'>
                <div id='search-header-container'>
                    <h2 id='search-header'>Search</h2>
                </div>
                <div id='display-shows-container'>
                    {populateShowsInSearch()}
                </div>
            </div>
        </>
    )
}
export default Showallshows;