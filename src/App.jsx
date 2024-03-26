import { useSelector } from 'react-redux';
import Header from './main_view/Header.jsx';
import Mainview from './main_view/Mainview.jsx';
import ProfileSelect from './profile_select/ProfileSelect.jsx';

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
    </>
  );
}
export default App;