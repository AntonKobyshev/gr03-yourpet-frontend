import instance from "./auth";

const getAllNews = async (params) => {
  const res = await instance.get(`/news`, {
    params,
  });

  return res.data;
};

export default getAllNews;
