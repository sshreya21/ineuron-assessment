import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledFieldError = styled.p`
  padding: 3px 0;
  color: #f8151d;
`;

export const StyledFormLabel = styled.label`
  display: inline-block;
  font-weight: normal;
  font-size: 14px;
  color: ${({ fill }) => fill && fill};
  ${({ margin }) => margin && `margin: ${margin};`};
  line-height: 1.45em;
`;
