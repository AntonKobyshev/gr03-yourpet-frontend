import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../modules/Header/Header";
import css from "./SharedLayout.module.css";
import Loader from "../Loader/Loader";

export default function SharedLayout() {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
