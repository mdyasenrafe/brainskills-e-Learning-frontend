import axios from "axios";

const url = "https://brainskillapi.herokuapp.com/";

const apiUrl = {
  getInstructor: "instructor/getInstructor",
};

export const getInstructor = async (body) => {
  try {
    const res = await axios.get(url + apiUrl.getInstructor);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
