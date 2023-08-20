import Logo from "./Logo/Logo";
import UserNav from "./UserNav/UserNav";
import css from "./Header.module.css";
import Nav from "./Nav/Nav";
import AuthNav from "./AuthNav/AuthNav";

export default function Header() {
  return (
    <header className={css.header}>
      <Logo />
      <div className={css.shouldShowNav}>
        <Nav />
      </div>
      <UserNav />
      {/* <AuthNav /> */}
    </header>
  );
}
