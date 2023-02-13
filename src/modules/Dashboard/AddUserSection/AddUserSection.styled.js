import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  width: 100%;
  display: grid;
  flex-direction: column;
  grid-template-columns: "50% 50%";
  max-width: 300px;
`;

export const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const StyledAddUserSectionContainer = styled.div`
  display: grid;
  gap: 20px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
`;

export const StyledButton = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
`;
