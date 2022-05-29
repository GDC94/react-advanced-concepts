
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Shopping from "../02-Component-patterns/Components/Shopping";

import logo from "../logo.svg";


export const Navigation = () => {
  return (
  
      <Router>
        <div className="main-layout">
          <nav>
            <img width="200px" src={logo} alt="React Logo" />

            <ul>
             
                <li>
                  <NavLink
                    to='/'
                    className={(navData) =>
                      navData.isActive ? "nav-active" : ""
                    }
                  >
                    Shopping
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    className={(navData) =>
                      navData.isActive ? "nav-active" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/users'
                    className={(navData) =>
                      navData.isActive ? "nav-active" : ""
                    }
                  >
                    Users
                  </NavLink>
                </li>

            </ul>
          </nav>

          <Routes>
            
           
            <Route path='/' element={<Shopping/>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/users' element={<h1>Users</h1>} />
            

            <Route path="/*" element={<Navigate to='/' replace />} />
          
          </Routes>
        </div>
      </Router>

  );
};
