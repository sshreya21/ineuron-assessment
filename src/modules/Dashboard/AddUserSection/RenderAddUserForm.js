import React from "react";
import { Form } from "../../../components";
import {
  validateRequiredField,
  isMobileNumber,
  isOnlyNumbers,
} from "../../../utils/formValidations";
import {
  StyledInputWrapper,
  StyledTitle,
  StyledAddUserSectionContainer,
  StyledButton,
  StyledWrapper,
} from "./AddUserSection.styled";

const RenderAddUserForm = ({
  onAddUserSubmit,
  handleCancelClick,
  errors,
  control,
}) => {
  return (
    <Form onSubmit={onAddUserSubmit}>
      <StyledAddUserSectionContainer>
        <StyledTitle>Add User Details</StyledTitle>
        <StyledWrapper>
          <StyledInputWrapper>
            <Form.Label label="First Name" margin="0 0 10px 0" fill="#828282" />
            <Form.Input
              control={control}
              errors={errors}
              name="firstName"
              type="Input"
              placeholder="Enter First Name"
              size="medium"
              rules={{
                validate: {
                  required: validateRequiredField("First Name"),
                },
              }}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <Form.Label label="Last Name" margin="0 0 10px 0" fill="#828282" />
            <Form.Input
              control={control}
              errors={errors}
              name="lastName"
              type="Input"
              placeholder="Enter Last Name"
              size="medium"
              rules={{
                validate: {
                  required: validateRequiredField("Last Name"),
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
                  required: validateRequiredField("Phone Number"),
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
                validate: { isOnlyNumbers, required: validateRequiredField("Age") },
              }}
            />
          </StyledInputWrapper>
        </StyledWrapper>
        <StyledButton>
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              handleCancelClick(false);
            }}
          >
            cancel
          </button>
        </StyledButton>
      </StyledAddUserSectionContainer>
    </Form>
  );
};

export default RenderAddUserForm;
