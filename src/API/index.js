import axios from "axios";

const url = "https://brainskillapi.herokuapp.com/";

const apiUrl = {
  getInstructor: "instructor/getInstructor",
  getCourses: "course/getCourse",
  getBlogApi: "blog/getBlog",
  getEventApi: "event/getEvent",
  getReview: "review/getReview",
};

export const getInstructor = async (body) => {
  try {
    const res = await axios.get(url + apiUrl.getInstructor);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const getCourses = async (body) => {
  try {
    const res = await axios.get(url + apiUrl.getCourses);
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
export const getEvents = async (body) => {
  try {
    const res = await axios.get(url + apiUrl.getEventApi);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const getReview = async (body) => {
  try {
    const res = await axios.get(url + apiUrl.getReview);
    return res.data;
  } catch (err) {
    console.log({ err });
  }
}
