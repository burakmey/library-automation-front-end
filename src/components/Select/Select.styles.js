import styled from "styled-components";

export const Select = styled.select`
  font-size: 14px;
  color: var(--input-text);
  padding: 10px;
  border-radius: 3px;
  border: none;
  background-color: #313841;
  width: 100%;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;
