import React from "react";
// @ts-ignore
import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store";
import "./spinner.styles.scss";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  const { isLoading } = useSelector((state: RootState) => state.spinner);
  return (
    <div id="spinner">
      <PacmanLoader color={"#f63d59"} loading={true} size={50} />
    </div>
  );
};

export default Spinner;
