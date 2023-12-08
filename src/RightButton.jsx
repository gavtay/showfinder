import { scrollrightmost, scrollrightpop, scrollrightnew } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import './RightLeftButton.css';

const rightCaret = <FontAwesomeIcon id="search-icon" icon={faCaretRight} style={{color: "#262626"}} />

function RightButton({ title, dataObj }) {
    const scrollPop = useSelector(state => state.scrollPop);
    const scrollNew = useSelector(state => state.scrollNew);
    const scrollMost = useSelector(state => state.scrollMost);
    const dispatch = useDispatch();
    let whichScrollChoose;

    function whichScroll() {
        if (title === 'Popular') {
            whichScrollChoose = scrollPop;
        }
        else if (title === 'New') {
            whichScrollChoose = scrollNew;
        }
        else if (title === 'Most Episodes') {
            whichScrollChoose = scrollMost;
        }
    }
    
    return (
        <>
            {whichScroll()}
            <button
                className='container-scroll-btn'
                onClick={() => {
                    if (whichScrollChoose + 5 < dataObj.length) { 
                        if (title === 'Popular') {
                            dispatch(scrollrightpop()); 
                        }
                        else if (title === 'New') {
                            dispatch(scrollrightnew());
                        }
                        else if (title === 'Most Episodes') {
                            dispatch(scrollrightmost());
                        }
                    }
                }}>{rightCaret}
            </button>
        </>
    )
}
export default RightButton;