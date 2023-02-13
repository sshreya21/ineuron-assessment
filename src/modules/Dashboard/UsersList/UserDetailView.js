import React, { useState } from "react";
import { Form } from "../../../components";
import {
  validateField,
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

const UserDetailView = ({
  control,
  errors,
  firstName,
  lastName,
  age,
  phoneNumber,
  _id,
  onDeleteClick,
  onUpdateUserSubmit,
}) => {
  const [editView, setEditView] = useState();
  const onEditClick = (action) => {
    setEditView(action);
  };

  const renderUserDetails = (firstName, lastName, phoneNumber, age, _id) => {
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
            <button type="button" onClick={() => onEditClick(true)}>
              Edit
            </button>
            <button type="button" onClick={() => onDeleteClick(_id)}>
              Delete
            </button>
          </StyledButtons>
        </>
      );
    }
    return (
      <Form onSubmit={onUpdateUserSubmit}>
        <StyledContainer>
          <StyledWrapper>
            <StyledInputWrapper>
              <Form.Label
                label="First Name"
                margin="0 0 10px 0"
                fill="#828282"
              />
              <Form.Input
                control={control}
                errors={errors}
                name="firstName"
                type="Input"
                placeholder="Enter First Name"
                size="medium"
                rules={{
                  validate: {
                    required: validateField("First Name"),
                  },
                }}
              />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <Form.Label
                label="Last Name"
                margin="0 0 10px 0"
                fill="#828282"
              />
              <Form.Input
                control={control}
                errors={errors}
                name="lastName"
                type="Input"
                placeholder="Enter Last Name"
                size="medium"
                rules={{
                  validate: {
                    required: validateField("Last Name"),
                  },
                }}
              />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <Form.Label
                label="Phone Number"
                margin="0 0 10px 0"
                fill="#828282"
              />
              <Form.Input
                control={control}
                errors={errors}
                name="phoneNumber"
                type="Input"
                placeholder="Enter Last Name"
                size="medium"
                rules={{
                  validate: {
                    isMobileNumber,
                    isOnlyNumbers,
                    required: validateField("Phone Number"),
                  },
                }}
              />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <Form.Label label="Age" margin="0 0 10px 0" fill="#828282" />
              <Form.Input
                control={control}
                errors={errors}
                name="age"
                type="Input"
                placeholder="Enter Age"
                size="medium"
                rules={{
                  validate: { isOnlyNumbers, required: validateField("Age") },
                }}
              />
            </StyledInputWrapper>
          </StyledWrapper>
          <StyledButtons>
            <button type="submit">Done</button>
            <button type="button" onClick={() => onEditClick(false)}>
              Cancel
            </button>
          </StyledButtons>
        </StyledContainer>
        <Form.Input
          control={control}
          name="id"
          type="hidden"
          value="Somethin"
        />
      </Form>
    );
  };

  return (
    <StyledUser>
      {renderUserDetails(firstName, lastName, phoneNumber, age, _id)}
    </StyledUser>
  );
};

export default UserDetailView;
