import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlogApi } from "../../../API";
import parse from "html-react-parser";

const BlogDetail = () => {
  const { id } = useParams();

  const [singleDetails, getSingleDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  let postBody = {
    id: id,
  };

  const fetchData = async () => {
    const res = await getSingleBlogApi(postBody);
    if (res?.error.true === "") {
      setLoading(false);
    } else {
      setLoading(false);
      getSingleDetails(res.data);
    }
  };

  console.log(singleDetails);

  return (
    <div>
      <div>
        {singleDetails?.blogLongdescription &&
          parse(singleDetails?.blogLongdescription)}
      </div>
    </div>
  );
};

export default BlogDetail;
