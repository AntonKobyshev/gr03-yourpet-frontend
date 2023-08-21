import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";
export default function Nav({ onClick }) {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink
            onClick={onClick}
            to="/news"
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onClick}
            to="/notices"
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onClick}
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
