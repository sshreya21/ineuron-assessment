import React from "react";
import UsersListView from "./UsersListView";
import useAPI from "../../../hooks/useAPI";
import { useForm } from "react-hook-form";

const UsersListContainer = () => {
  const [, deleteUser] = useAPI("DELETE_USER", {
    lazy: true,
  });

  const [, updateUser] = useAPI("UPDATE_USER", {
    lazy: true,
  });

  const [, , { refresh }] = useAPI("GET_USERS_LIST", { lazy: true });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handlePollDeleteSuccess = () => {
    refresh();
  };

  const handleDeleteClick = (id) => {
    deleteUser({
      onSuccess: handlePollDeleteSuccess,
      id: id,
    });
  };
  const payload = {
    firstName: "rakshash",
    lastName: "rrr",
    phoneNumber: "2541212221",
    age: 42,
  };
  const handleUpdateUserSubmit = (id) => {
    console.log();
    updateUser({
      onSuccess: handlePollDeleteSuccess,
      id: id,
      payload,
    });
  };

  return (
    <UsersListView
      onDeleteClick={handleDeleteClick}
      control={control}
      errors={errors}
      handleUpdateUserSubmit={handleSubmit(handleUpdateUserSubmit)}
    />
  );
};

export default UsersListContainer;
