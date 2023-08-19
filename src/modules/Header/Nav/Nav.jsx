import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";
export default function Nav() {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notices"
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            Our friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
