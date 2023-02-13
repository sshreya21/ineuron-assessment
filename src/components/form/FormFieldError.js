import React from "react";
import { StyledFieldError } from "./Form.styled";

const FormFieldError = ({ error }) => {
  if (!error) {
    return null;
  }

  return <StyledFieldError>{error}</StyledFieldError>;
};

export default FormFieldError;
