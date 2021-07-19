import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => (
  <ul className="Navigation">
    <li className="Navigation__navLink"><Link to="/">Search</Link></li>
    <li className="Navigation__navLink"><Link to="/playlist">Playlist</Link></li>
  </ul>
);

export default Navigation;