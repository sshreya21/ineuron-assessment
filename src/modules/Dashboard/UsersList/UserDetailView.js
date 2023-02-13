import React, { useState } from "react";
import { Form } from "../../../components";
import {
  validateRequiredField,
  isMobileNumber,
  isOnlyNumbers,
} from "../../../utils/formValidations";
import {
  StyledUserDetail,
  StyledDetailValue,
  StyledDetailHeading,
  StyledButtons,
  StyledUserDetails,
  StyledUser,
  StyledContainer,
} from "./UserList.styled";
import {
  StyledInputWrapper,
  StyledWrapper,
} from "../AddUserSection/AddUserSection.styled";
import useAPI from "../../../hooks/useAPI";
import { useForm } from "react-hook-form";
import { Button } from "antd";

const formFields = {
  firstName: {
    label: "First Name",
    rules: {
      validate: {
        required: validateRequiredField("First Name"),
      },
    },
  },
  lastName: {
    label: "Last Name",
    rules: {
      validate: {
        required: validateRequiredField("Last Name"),
      },
    },
  },

  phoneNumber: {
    label: "Phone Number",
    rules: {
      validate: {
        isMobileNumber,
        isOnlyNumbers,
        required: validateRequiredField("Phone Number"),
      },
    },
  },
  age: {
    label: "Age",
    rules: {
      validate: {
        isOnlyNumbers,
        required: validateRequiredField("Age"),
      },
    },
  },
};

const UserDetailView = ({ user }) => {
  const [editView, setEditView] = useState();

  const [, deleteUser] = useAPI("DELETE_USER", { lazy: true });
  const [, , { refresh }] = useAPI("GET_USERS_LIST", { lazy: true });
  const [, updateUser] = useAPI("UPDATE_USER", { lazy: true });

  const onDeleteClick = (id) => {
    deleteUser({
      id: id,
      onSuccess: refresh,
    });
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      age: user.age,
      id: user._id,
    },
  });

  const onUpdateUserSubmit = (payload) => {
    updateUser({
      onSuccess: refresh,
      id: user._id,
      payload,
    });
  };

  const renderUserDetails = ({
    firstName,
    lastName,
    phoneNumber,
    age,
    _id,
  }) => {
    const USER_DETAILS = [
      { label: "First Name", value: firstName },
      { label: "Last Name", value: lastName },
      { label: "Phone Number", value: phoneNumber },
      { label: "Age", value: age },
    ];
    if (!editView) {
      return (
        <>
          <StyledUserDetail>
            {USER_DETAILS.map(({ label, value }) => {
              return (
                <StyledUserDetails key={value}>
                  <StyledDetailHeading>{label}</StyledDetailHeading>
                  <StyledDetailValue>{value}</StyledDetailValue>
                </StyledUserDetails>
              );
            })}
          </StyledUserDetail>
          <StyledButtons>
            <Button type="primary" onClick={() => setEditView(true)}>
              Edit
            </Button>
            <Button onClick={() => onDeleteClick(_id)} danger>
              Delete
            </Button>
          </StyledButtons>
        </>
      );
    }

    return (
      <Form onSubmit={handleSubmit(onUpdateUserSubmit)}>
        <StyledContainer>
          <StyledWrapper>
            {Object.keys(formFields).map((name) => {
              const { label, ...attributes } = formFields[name];
              return (
                <StyledInputWrapper key={name}>
                  <Form.Label
                    label={label}
                    margin="0 0 10px 0"
                    fill="#828282"
                  />
                  <Form.Input
                    control={control}
                    name={name}
                    error={errors[name]}
                    size="medium"
                    placeholder={attributes.placeholder || `Enter ${label}`}
                    {...attributes}
                  />
                </StyledInputWrapper>
              );
            })}
          </StyledWrapper>
          <StyledButtons>
            <button type="submit">Done</button>
            <button type="button" onClick={() => setEditView(false)}>
              Cancel
            </button>
          </StyledButtons>
        </StyledContainer>
      </Form>
    );
  };

  return <StyledUser>{renderUserDetails(user)}</StyledUser>;
};

export default UserDetailView;
