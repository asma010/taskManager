import React from "react";
import { Link } from "react-router-dom";

const SubmitButton = ({ handleClick, isDisabled }) => {

  return (
    <>
      <button disabled={isDisabled} onClick={handleClick} className="submit-button">submit</button>
    </>
  );
};
export default SubmitButton;