import instance from "./auth";

const getSponsors = async () => {
  const { data } = await instance.get(`api/sponsors`);

  return data;
};

export default getSponsors;
