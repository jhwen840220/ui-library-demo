import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  padding: 6px 16px;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ level }) => {
    switch (level) {
      case "danger":
        return `
					background-color: #f4511e;
					border-color: #f4511e;
          &:hover {
            background-color: #a33512;
            border-color: #a33512;
          }
				`;
      case "primary":
      default:
        return `
					background-color: #1e9fd2;
					border-color: #1e9fd2;
          &:hover {
            background-color: #0f7aab;
            border-color: #0f7aab;
          }
				`;
    }
  }}
`;
const Button = ({ level, children }) => {
  return <StyledButton level={level}>{children}</StyledButton>;
};

export default Button;
