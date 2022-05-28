import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import { LazypageOne, LazypageTwo, LazypageThree } from "../01-Lazyload/Pages";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={(navData) => (navData.isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={(navData) => (navData.isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={(navData) => (navData.isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy1" element={<LazypageOne />} />
          <Route path="/lazy2" element={<LazypageTwo />} />
          <Route path="/lazy3" element={<LazypageThree />} />
          <Route path="/*" element={<Navigate to='/lazy1' replace/>} />
        </Routes>
      </div>
    </Router>
  );
};
