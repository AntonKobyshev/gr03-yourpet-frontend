import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-pet-xqzt.onrender.com/api",
});

export const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const register = async (data) => {
  const { data: result } = await instance.post("/auth/register", data);
  if (result) {
    const { email, password } = data;
    const { data: result } = await instance.post("/auth/login", {
      email,
      password,
    });
    setToken(result.accessToken);
    return result;
  }
  return result;
};

export const login = async (data) => {
  const { data: result } = await instance.post("/auth/login", data);
  await setToken(result.accessToken);
  return result;
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("/auth/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post("/auth/logout");
  setToken();
  return data;
};

export const getUser = async (token) => {
  try {
    setToken(token);
    const { data: result } = await instance.get("/user", token);
    return result;
  } catch (error) {
    throw error;
  }
};

export const addMyNewPet = async (data) => {
  const response = await instance.post("/user/pets", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
};

export const addPetNotice = async (data) => {
  const response = await instance.post("/notices", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  setToken();
  return response;
};

export const updateUserInf = async (fieldToUpdate, newValue, token) => {
  setToken(token);
  const data = {
    [fieldToUpdate]: newValue,
  };
  const { data: result } = await instance.patch("/user", data, token);
  return result;
};

export const updateAvatar = async (token, formData) => {
  setToken(token);
  const { data: result } = await instance.patch("/user", formData, token);
  return result;
};

export const deleteUserPet = async (id) => {
  const { data } = await instance.delete(`/user/pets/${id}`);
  return data;
};

export default instance;
