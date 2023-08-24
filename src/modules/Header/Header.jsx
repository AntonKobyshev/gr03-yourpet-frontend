import Logo from "./Logo/Logo";
import UserNav from "./UserNav/UserNav";
import css from "./Header.module.css";
import Nav from "./Nav/Nav";
import AuthNav from "./AuthNav/AuthNav";
import { useSelector } from "react-redux";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <header className={css.header}>
      <Logo />
      <div className={css.shouldShowNav}>
        <Nav />
      </div>
      {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
      <UserNav />
      <AuthNav />
    </header>
  );
}
