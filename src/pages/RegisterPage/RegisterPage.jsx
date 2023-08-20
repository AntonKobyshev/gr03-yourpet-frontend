import RegisterForm from "../../modules/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.myСomponent}>
      <section className={css.sectionMain}>
        <div className="container">
          <RegisterForm />
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
