import { scrollleftpop, scrollleftmost, scrollleftnew } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import './RightLeftButton.css';

const leftCaret = <FontAwesomeIcon id="search-icon" icon={faCaretLeft} style={{color: "#262626"}} />

function LeftButton({ title }) {
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
    whichScroll();

    return (
        <>
            <button
                className='container-scroll-btn'
                onClick={() => {
                    if (whichScrollChoose) { 
                        if (title === 'Popular') {
                            dispatch(scrollleftpop()); 
                        }
                        else if (title === 'New') {
                            dispatch(scrollleftnew());
                        }
                        else if (title === 'Most Episodes') {
                            dispatch(scrollleftmost());
                        }
                    }
                }}>{leftCaret}
            </button>
        </>
    )
}
export default LeftButton;