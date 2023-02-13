import React, { useState } from "react";
import AddUserSectionView from "./AddUserSectionView";
import { useForm } from "react-hook-form";
import useAPI from "../../../hooks/useAPI";

const AddUserSectionContainer = () => {
  const [formView, setFormView] = useState(false);
  const [, createUser] = useAPI("CREATE_USER", {
    lazy: true,
  });

  const [, , { refresh }] = useAPI("GET_USERS_LIST", { lazy: true });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddClick = (action) => {
    setFormView(action);
  };

  const handleCreateUserSuccess = () => {
    refresh();
    setFormView(false);
    reset();
  };

  const handleAddUserSubmit = (formData) => {
    const payload = formData;
    createUser({
      onSuccess: handleCreateUserSuccess,
      payload,
    });
  };

  return (
    <AddUserSectionView
      control={control}
      errors={errors}
      handleAddClick={handleAddClick}
      formView={formView}
      handleAddUserSubmit={handleSubmit(handleAddUserSubmit)}
    />
  );
};

export default AddUserSectionContainer;
