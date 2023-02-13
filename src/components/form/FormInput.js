import React from "react";
import Input from "../Input";
import { Controller } from "react-hook-form";

import { getFieldError } from "../../utils/formValidations";
import FormFieldError from "./FormFieldError";

const FormInput = ({ control, name, border, ...rest }) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <div>
      <Controller
        control={control}
        render={({ field }) => <Input {...field} autoComplete="off" />}
        name={name}
        color={color}
        style={{ border: border ? "none" : null }}
        {...rest}
      />
      {error && <FormFieldError error={error} />}
    </div>
  );
};

export default FormInput;
