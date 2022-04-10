import axios from "axios";
import { headers } from "./Headers";

const url = "https://brainskillapi.herokuapp.com/";

const apiUrl = {
  getInstructor: "instructor/getInstructor",
  getCourses: "course/getCourse",
  getCourseDetails: "course/courseDetails",
  getBlogApi: "blog/getBlog",
  getEventApi: "event/getEvent",
  getReview: "review/getReview",
  signupUrl: "signin/signup",
  verifyUrl: "signin/verifyAceount",
  signUrl: "signin/signin",
  getUser: "signin/getUser",
  getDashboard: "dashboard/getDashboard",
  addCart: "cart/addCart",
  getCart: "cart/getCart",
  postPayment: "payment/init",
};

export const postPaymentApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.postPayment, body, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const addCartApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.addCart, body, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const getCourseDetailsApi = async (id) => {
  try {
    const res = await axios.post(url + apiUrl.getCourseDetails, id);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const getDashboardApi = async () => {
  try {
    const res = await axios.get(url + apiUrl.getDashboard, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const getCartApi = async () => {
  try {
    const res = await axios.get(url + apiUrl.getCart, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const getUserApi = async () => {
  try {
    const res = await axios.get(url + apiUrl.getUser, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const signinAPI = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.signUrl, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const VerifyAPi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.verifyUrl, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const signUpApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.signupUrl, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
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
};
