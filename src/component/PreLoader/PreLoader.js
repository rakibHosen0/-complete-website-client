import React from "react";
import { css } from "@emotion/css";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: none;
`;

const PreLoader = (props) => {
  return (
    <div className="text-center col-12 py-2 my-2">
      <BounceLoader
        css={override}
        size={70}
        color={"#FBD062"}
        loading={props.loading}
      />
    </div>
  );
};

export default PreLoader;
