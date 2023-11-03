import axios from "axios";

export const getUsers = async (callback) => {
  const BASE_URL = "https://6544bd695a0b4b04436cdff6.mockapi.io/projects";
  try {
    const response = await axios.get(BASE_URL);
    const data = await response.data;
    // console.log(data);
    callback(data);
  } catch (error) {
    console.error("Terjadi Kesalahan", error);
    throw error;
  }
};

getUsers();
