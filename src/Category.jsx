import { useSelector } from 'react-redux';
import RightButton from './RightButton.jsx'
import LeftButton from './LeftButton.jsx';
import Show from './Show.jsx';
import './Category.css';
import {data} from './moviedata.js';

function Category({ title }) {
    const scrollPop = useSelector(state => state.scrollPop);
    const scrollNew = useSelector(state => state.scrollNew);
    const scrollMost = useSelector(state => state.scrollMost);
    let dataObj = [];

    function orderByPopularity() {
        let dataShowPopularity = [];
        let tempVal = 0;

        dataObj = [];
        for (let i = 0; i < data.length; ++i) {
            dataObj.push(data[i]);
            dataShowPopularity.push(data[i].popularity);
        }

        for (let i = 0; i < data.length; ++i) {
            for (let u = 0; u < data.length - 1; ++u) {
                if (dataShowPopularity[i] > dataShowPopularity[u]) {
                    tempVal = dataShowPopularity[i];
                    dataShowPopularity[i] = dataShowPopularity[u];
                    dataShowPopularity[u] = tempVal;

                    tempVal = dataObj[i];
                    dataObj[i] = dataObj[u];
                    dataObj[u] = tempVal;
                }
            }
        }
    }
    function orderByDate() {
        let dataParsedDates = [];
        let tempVal = 0;

        dataObj = [];
        for (let i = 0; i < data.length; ++i) {
            dataObj.push(data[i]);
            dataParsedDates.push(Date.parse(data[i].release));
        }

        for (let i = 0; i < data.length; ++i) {
            for (let u = 0; u < data.length - 1; ++u) {
                if (dataParsedDates[i] > dataParsedDates[u]) {
                    tempVal = dataParsedDates[i];
                    dataParsedDates[i] = dataParsedDates[u];
                    dataParsedDates[u] = tempVal;

                    tempVal = dataObj[i];
                    dataObj[i] = dataObj[u];
                    dataObj[u] = tempVal;
                }
            }
        }
    }
    function orderByMost() {
        let dataShowLongest = [];
        let tempVal = 0;

        dataObj = [];
        for (let i = 0; i < data.length; ++i) {
            dataObj.push(data[i]);
            dataShowLongest.push(data[i].episodes);
        }

        for (let i = 0; i < data.length; ++i) {
            for (let u = 0; u < data.length - 1; ++u) {
                if (dataShowLongest[i] > dataShowLongest[u]) {
                    tempVal = dataShowLongest[i];
                    dataShowLongest[i] = dataShowLongest[u];
                    dataShowLongest[u] = tempVal;

                    tempVal = dataObj[i];
                    dataObj[i] = dataObj[u];
                    dataObj[u] = tempVal;
                }
            }
        }
    }



    function showFiveCategory(detailsShow) {
        let showFiveArray = [];

        if (title === 'Popular') {
            for (let i = scrollPop; i < scrollPop + 5; ++i) {
                showFiveArray.push(dataObj[i]);
            }

            return (
                <>
                    {
                        showFiveArray.map((obj) => (
                            <Show key={obj.id} showObj={obj} title={title} detailsShow={detailsShow} />
                        ))
                    }
                </>
            )
        }
        else if (title === 'New') {
            for (let i = scrollNew; i < scrollNew + 5; ++i) {
                showFiveArray.push(dataObj[i]);
            }
    
            return (
                <>
                    {
                        showFiveArray.map((obj) => (
                            <Show key={obj.id} showObj={obj} title={title} detailsShow={detailsShow} />
                        ))
                    }
                </>
            )
        }
        else if (title === 'Most Episodes') {
            for (let i = scrollMost; i < scrollMost + 5; ++i) {
                showFiveArray.push(dataObj[i]);
            }
    
            return (
                <>
                    {
                        showFiveArray.map((obj) => (
                            <Show key={obj.id} showObj={obj} title={title} detailsShow={detailsShow} />
                        ))
                    }
                </>
            )
        }
    }

    if (title === 'Popular') {
        orderByPopularity();
    }
    if (title === 'New') {
        orderByDate();
    }
    if (title === 'Most Episodes') {
        orderByMost();
    }

    return (
        <>
            <div id='category-container'>
                <div id='category-header-container'>
                    <h2 id='category-header'>{title}</h2>
                </div>
                <div id='category-scroll-and-data'>
                    <div className='scroll-btn-container'>
                        <LeftButton
                            title={title}
                        />
                    </div>
                    <div id='shows-container'>
                        {showFiveCategory()}
                    </div>
                    <div className='scroll-btn-container'>
                        <RightButton
                            title={title}
                            dataObj={dataObj}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;