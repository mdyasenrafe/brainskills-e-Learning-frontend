import React, { useEffect, useState } from "react";
import { getCourseDetailsApi } from "../API";

const Details = (id) => {
  const [courseDetails, setCourseDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let postbody = {
      id: id,
    };
    const res = await getCourseDetailsApi(postbody);
    if (res?.error.true === "") {
      setLoading(false);
    } else {
      setCourseDetails(res.data);
      setLoading(false);
    }
  };
  return { courseDetails, setCourseDetails, loading };
};

export default Details;
