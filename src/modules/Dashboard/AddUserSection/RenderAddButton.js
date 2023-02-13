import React from "react";

const RenderAddButton = ({ onAddClick }) => {
  return (
    <>
      <button type="button" onClick={() => onAddClick(true)}>
        Add New User
      </button>
    </>
  );
};

export default RenderAddButton;
