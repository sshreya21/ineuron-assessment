import React from "react";
import RenderAddButton from "./RenderAddButton";
import RenderAddUserForm from "./RenderAddUserForm";

const AddUserSectionView = ({
  handleAddClick,
  formView,
  handleAddUserSubmit,
  control,
  errors,
}) => {
  const renderAddSection = () => {
    return formView ? (
      <RenderAddUserForm
        onAddUserSubmit={handleAddUserSubmit}
        control={control}
        errors={errors}
        handleCancelClick={handleAddClick}
      />
    ) : (
      <RenderAddButton onAddClick={handleAddClick} />
    );
  };
  return <div>{renderAddSection()}</div>;
};

export default AddUserSectionView;
