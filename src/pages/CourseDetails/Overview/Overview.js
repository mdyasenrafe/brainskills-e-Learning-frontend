import React, { useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Details from "../../../hooks/Details";
import LoadingSpiners from "../../../Componets/LoadingSpiners";

const Overview = () => {
  const { id } = useParams();

  let { courseDetails, loading } = Details(id);

  return (
    <div className="px-2">
      {loading === true ? (
        <LoadingSpiners loading={loading} height={"30vh"} />
      ) : (
        <>
          {" "}
          {courseDetails?.courseLongDescription &&
            parse(courseDetails?.courseLongDescription)}
        </>
      )}
    </div>
  );
};

export default Overview;
