import { showdetails } from '../actions/index.js';
import { useDispatch } from 'react-redux';
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
import './Show.css';

function Show({ showObj, title }) {
    let showImgUrl;
    const dispatch = useDispatch();

    if (showObj.imgurl === './cover_images/demonslayer_cover.jpg') {
        showImgUrl = show_img_1000;
    }
    else if (showObj.imgurl === './cover_images/hxh_cover.jpg') {
        showImgUrl = show_img_1001;
    }
    else if (showObj.imgurl === './cover_images/opm_cover.jpg') {
        showImgUrl = show_img_1002;
    }
    else if (showObj.imgurl === './cover_images/tokyoghoul_cover.jpg') {
        showImgUrl = show_img_1003;
    }
    else if (showObj.imgurl === './cover_images/onepiece_cover.jpg') {
        showImgUrl = show_img_1004;
    }
    else if (showObj.imgurl === './cover_images/akame_cover.jpg') {
        showImgUrl = show_img_1005;
    }
    else if (showObj.imgurl === './cover_images/myhero_cover.jpg') {
        showImgUrl = show_img_1006;
    }
    else if (showObj.imgurl === './cover_images/bunnygirl_cover.jpg') {
        showImgUrl = show_img_1007;
    }
    else if (showObj.imgurl === './cover_images/kakegurui_cover.jpg') {
        showImgUrl = show_img_1008;
    }
    else if (showObj.imgurl === './cover_images/naruto_cover.jpg') {
        showImgUrl = show_img_1009;
    }

    function displayDataForShow(title, showObj) {
        if (title === 'Popular') {
            return (
                <>
                    <p className='display-data-show'>{showObj.popularity}</p>
                </>
            )
        }
        if (title === 'New') {
            return (
                <>
                    <p className='display-data-show'>{showObj.release}</p>
                </>
            )
        }
        if (title === 'Most Episodes') {
            return (
                <>
                    <p className='display-data-show'>{showObj.episodes}</p>
                </>
            )
        }
    }

    const toggleDetails = (showObj) => {
        dispatch(showdetails(showObj))
    }

    return (
        <>
            <div id='show-container'>
                <button
                    id='show-btn'
                    onClick={toggleDetails}>
                    <img 
                        id='cover-image'
                        src={showImgUrl}
                        alt={showObj.id}
                    />
                </button>
                <div className='show-info'>
                    <p className='show-info-p'>{showObj.title}</p>
                    {displayDataForShow(title, showObj)}
                </div>
            </div>
        </>
    )
}
export default Show;