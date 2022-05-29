
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
  
      <Router>
        <div className="main-layout">
          <nav>
            <img width="200px" src={logo} alt="React Logo" />

            <ul>
              {routes.map(({ id, to, name }) => (
                <li key={id}>
                  <NavLink
                    to={to}
                    className={(navData) =>
                      navData.isActive ? "nav-active" : ""
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            
            {routes.map(({ id, path, Component }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          
          </Routes>
        </div>
      </Router>

  );
};
