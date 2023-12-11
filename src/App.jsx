import { useSelector } from 'react-redux';
import Header from './Header.jsx';
import Mainview from './Mainview.jsx';
import ProfileSelect from './ProfileSelect.jsx';

function App() {

  function renderProfileOrShows() {
    const profileSelect = useSelector(state => state.selectProf);

    if (profileSelect === '') {
      return ( <ProfileSelect />)
    }
    else {
      return (
        <>
          <Header />
          <Mainview />
        </>
      )
    }
  }

  return (
    <>
      {renderProfileOrShows()}
      {/* <ProfileSelect /> */}

      {/* <Header />
      <Mainview /> */}
    </>
  );
}
export default App;