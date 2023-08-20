import css from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={css.background}>
      <h1 className={css.title}>Take good care of your small pets</h1>
      <div className={css.box}>
        <img className={css.bulldog} alt="cute french bulldog" />
        <img className={css.dog} alt="cute dog" />
        <img className={css.cat} alt="cute cat" />
      </div>
    </div>
  );
}
