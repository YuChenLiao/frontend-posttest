import './App.css';
import HeaderTab from './components/header';
import MainPage from './components/mainPage';
import RightAffix from './components/rightAffix';

function App() {
  return (
    <div className="App">
      <HeaderTab></HeaderTab>
      <MainPage></MainPage>
      <RightAffix></RightAffix>
    </div>
  );
}

export default App;
