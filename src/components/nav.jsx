import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Nav() {
  function activeNav({ isActive }) {
    return isActive ? "nav__link nav__link--active" : "nav__link";
  }

  return (
    <nav className="nav">
      <div className="nav__inner">
        <NavLink className="nav__brand" to="/">
          {/* <img className="nav__logo" src={logo} alt="NaijaJobs" /> */}
          <span className="nav__title">NaijaJobs</span>
        </NavLink>
        <div className="nav__links">
          <NavLink to="/" className={activeNav}>Home</NavLink>
          <NavLink to="/jobs" className={activeNav}>Jobs</NavLink>
          <NavLink to="/add_job" className={activeNav}>Add Job</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
