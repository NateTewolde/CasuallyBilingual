import React from "react";
import type { UpdateOptionsBtnProp } from "~types/common";

const UpdateOptionsBtn = ({ handleUpdateClick }: UpdateOptionsBtnProp) => {
  return <button onClick={handleUpdateClick}>Update</button>;
};

export default UpdateOptionsBtn;
