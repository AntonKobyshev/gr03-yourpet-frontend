import instance from "./auth";

// export const getAllNews = async () => {
//   const res = await instance.get("/news");
//   return res.data;
// };

// export const getFilteredNews = async (query = "", page = 1) => {
//   const { data } = await instance.get(
//     `news/?search=${query}&page=${page}&limit=6`
//   );
//   return data;
// };

// export default getAllNews;

export const getNews = async (query = "", page = 1) => {
  const { data } = await instance.get(
    `news/?search=${query}&page=${page}&limit=6`
  );
  return data;
};
