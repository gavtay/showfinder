import { useSelector, useDispatch } from 'react-redux';
import { closedetails } from './actions/index.js';
import show_img_1000 from './cover_images/demonslayer_cover.jpg';
import show_img_1001 from './cover_images/hxh_cover.jpg';
import show_img_1002 from './cover_images/opm_cover.jpg';
import show_img_1003 from './cover_images/tokyoghoul_cover.jpg';
import show_img_1004 from './cover_images/onepiece_cover.jpg';
import show_img_1005 from './cover_images/akame_cover.jpg';
import show_img_1006 from './cover_images/myhero_cover.jpg';
import show_img_1007 from './cover_images/bunnygirl_cover.jpg';
import show_img_1008 from './cover_images/kakegurui_cover.jpg';
import show_img_1009 from './cover_images/naruto_cover.jpg';
import {data} from './moviedata.js';
import './ShowDetails.css';

// let {data} = require('./moviedata.js');

function ShowDetails() {
    const showDet = useSelector(state => state.showDet);
    const dispatch = useDispatch();
    console.log(showDet);

    let showImgUrl;
    if (showDet === '1000') {
        showImgUrl = show_img_1000;
    }
    else if (showDet === '1001') {
        showImgUrl = show_img_1001;
    }
    else if (showDet === '1002') {
        showImgUrl = show_img_1002;
    }
    else if (showDet === '1003') {
        showImgUrl = show_img_1003;
    }
    else if (showDet === '1004') {
        showImgUrl = show_img_1004;
    }
    else if (showDet === '1005') {
        showImgUrl = show_img_1005;
    }
    else if (showDet === '1006') {
        showImgUrl = show_img_1006;
    }
    else if (showDet === '1007') {
        showImgUrl = show_img_1007;
    }
    else if (showDet === '1008') {
        showImgUrl = show_img_1008;
    }
    else if (showDet === '1009') {
        showImgUrl = show_img_1009;
    }

    let id = Number(showDet);
    let newObj = data.filter((obj) => {
        let showId = obj.id;
        
        if (showId === id) {
            return obj;
        }
    })

    console.log(newObj);

    return (
        <>
            <div id="show-details-container">
                <div id='details-container'>
                    <div id='details-head-container'>
                        <div id='details-info-container'>
                            <img
                                id='details-img'
                                src={showImgUrl}
                                alt='Photo for show'
                            />
                            <div id='details-info'>
                                <h2 id='details-title'>{newObj[0].title}</h2>
                                <p className='details-show-info'>Studio: {newObj[0].studio}</p>
                                <p className='details-show-info'>Release Date: {newObj[0].release}</p>
                                <p className='details-show-info'>Episodes: {newObj[0].episodes}</p>
                            </div>
                        </div>
                        <button
                            id='details-close-btn'
                            onClick={()=> dispatch(closedetails())}
                            >X
                        </button>
                    </div>
                    <div id='details-lower-container'>
                        <p className='details-show-info'>Popularity Rating: {newObj[0].popularity}</p>
                        <p className='details-show-info'>Summary: Pretend there is a summary here... I didn't feel like writing or finding a short one...</p>
                        <p className='details-show-info'>Link to more info: <a href={newObj[0].link} id='details-show-link' className='details-show-info'>Click Here</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowDetails;