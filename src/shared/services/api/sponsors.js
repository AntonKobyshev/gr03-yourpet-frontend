import instance from "./auth";

const getSponsors = async () => {
  const data = await instance.get("/sponsors");
  return data;
};

export default getSponsors;
