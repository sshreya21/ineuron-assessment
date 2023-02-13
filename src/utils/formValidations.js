import { MOBILE_NUMBER, NUMBER_PATTERN } from "../constants/patterns";

export const isOnlyNumbers = (value) => {
  if (value && value === "0") {
    return "0 as value is not allowed";
  }
  if (value && value?.toString()?.trim()?.includes("-")) {
    return "Negative values are not allowed";
  }

  if (value && !value?.toString().trim()?.match(NUMBER_PATTERN)) {
    return "Only numeric values allowed";
  }

  return null;
};

export const isMobileNumber = (value) => {
  if (!value || value?.match(MOBILE_NUMBER)) {
    return null;
  }

  return `Invalid Phone number`;
};

export const getFieldError = ({ error, errors, name }) => {
  const newError =
    (error && error.message) ||
    (errors && errors[name] && errors[name].message);
  const color = newError && "error";

  return { error: newError, color };
};

export const validateRequiredField = (fieldName) => (value) => {
  if (!value) {
    return `${fieldName} is required`;
  }

  if (value && Array.isArray(value)) {
    if (value.length === 0) {
      return `${fieldName} is required`;
    }
  }

  return null;
};
