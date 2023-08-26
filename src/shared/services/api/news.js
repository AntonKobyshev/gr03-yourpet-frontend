import instance from "./auth";

export const getNews = async (query = "", page = 1) => {
  const { data } = await instance.get(
    `news/?search=${query}&page=${page}&limit=6`
  );
  return data;
};
