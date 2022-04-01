import axios from "axios";

const url = "https://brainskillapi.herokuapp.com/";

const apiUrl = {
  getInstructor: "instructor/getInstructor",
  getBlogApi: "blog/getBlog",
};

export const getInstructor = async (body) => {
  try {
    const res = await axios.get(url + apiUrl.getInstructor);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const getBlogs = async (body) => {
  try {
    const res = await axios.get(url + apiUrl.getBlogApi);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
