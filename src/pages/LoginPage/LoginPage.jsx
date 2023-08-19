import LoginForm from "../../modules/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.myСomponent}>
      <section className={css.sectionMain}>
        <div className="container">
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
