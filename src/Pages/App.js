import { HashRouter, Route } from "react-router-dom";
import Navigation from '../Components/Navigation';
import Search from './Search';
import Playlist from './Playlist';
import './App.css';

const App = () => {
  return (
    <HashRouter basename="/">
      <Navigation />
      <Route exact path="/" component={Search} />
      <Route exact path="/playlist" component={Playlist} />
    </HashRouter>
  );
}

export default App;
