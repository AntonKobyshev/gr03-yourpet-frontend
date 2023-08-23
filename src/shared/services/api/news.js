import instance from "./auth";

export const getAllNews = async (params) => {
  const res = await instance.get(`/news`, {
    params,
  });

  return res.data;
};

export const getFilteredNews = async (query = "", page = 1) => {
  const { data } = await instance.get(
    `news/?searchValue=${query}&page=${page}&limit=6`
  );
  return data;
};

// export default getAllNews;
