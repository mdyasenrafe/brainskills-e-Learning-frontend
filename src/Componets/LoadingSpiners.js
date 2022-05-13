import { useState } from "react";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-color: red;
`;

function LoadingSpiners({ loading, height }) {
  let [color, setColor] = useState("#6366F1");

  return (
    <div style={{ height: height }} className="items-center flex">
      <DotLoader color={color} loading={loading} css={override} size={60} />
    </div>
  );
}

export default LoadingSpiners;
