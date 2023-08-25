import css from "./NewsPage.module.css";
import NewsList from "../../modules/News/NewsList/NewsList";
import NewsSearch from "../../modules/News/NewsSearch/NewsSearch";
import NewsPagination from "../../modules/News/NewsPagination/NewsPagination";
import { useSelector } from "react-redux";
import { selectIsLoadingNews } from "../../redux/news/news-selectors";
import Loader from "../../shared/components/Loader/Loader";

const NewsPage = () => {
  const { isLoading } = useSelector(selectIsLoadingNews);

  return (
    <div className="container">
      <div className="NewsPage">
        <h1 className={css.title}>News</h1>
        <NewsSearch />
        {isLoading && <Loader />}
        <NewsList />
        <NewsPagination />
      </div>
    </div>
  );
};

export default NewsPage;
