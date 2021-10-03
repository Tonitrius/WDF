import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Notification from './components/Notification';

function App() {
  return (
    <div>
      <Header/>
      <Notification topic='SUORA LÄHETYS:' body='La Palman tulivuorenpurkaus syöksee taivaalle sakeaa savua'/>
      <Notification topic='PÄIVÄN TIMANTTI:' body='Olen kuskannut lastani autolla kouluun ajattelematta, että se voi kostautua viiveellä, kirjoittaa Anni Hautala.'/>
      <MainSection topic='Oikeudenkäynnit' body='Kymmenistä raiskauksista syytetty Peter Nygård suostuu luovutukseen Yhdysvaltoihin' topic2='Ulkomaat' body2='15:45'/>

    </div>
  );
}

export default App;
