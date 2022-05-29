import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazypageOne, LazypageThree, LazypageTwo } from "../Pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout page</h1>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazypageOne/>} />
        <Route path="lazy2" element={<LazypageTwo/>} />
        <Route path="lazy3" element={<LazypageThree/>} />

        <Route path="*" element={<Navigate replace to='lazy1'/>} />
      </Routes>
    </div>
  );
};
export default LazyLayout;
