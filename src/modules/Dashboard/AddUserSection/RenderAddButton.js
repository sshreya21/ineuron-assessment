import React from "react";
import { Button } from "antd";

const RenderAddButton = ({ onAddClick }) => {
  return (
    <>
      <Button type="primary" onClick={() => onAddClick(true)}>
        Add New User
      </Button>
    </>
  );
};

export default RenderAddButton;
