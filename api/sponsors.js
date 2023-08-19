import axios from "axios";

const apiSponsors = axios.create({
  baseURL: "https://your-pet-xqzt.onrender.com/",
});

const getSponsors = async () => {
  const { data } = await apiSponsors.get(`api/sponsors`);

  return data;
};

export default getSponsors;
