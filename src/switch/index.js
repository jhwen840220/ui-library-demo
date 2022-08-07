import React, { useState } from "react";
import styled from "styled-components";

const SwitchWrapper = styled.button`
  position: relative;
  box-sizing: border-box;
  border-radius: 100px;
  width: 44px;
  height: 22px;
  line-height: 22px;
  border: 0;
  background-color: ${({ checked }) => (checked ? "#1e9fd2" : "#efefef")};
`;

const SwitchHandle = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? "calc(100% - 20px)" : "2px")};
  width: 18px;
  height: 18px;
  transition: all 0.2s ease-in-out;
  &:before {
    position: absolute;
    content: "";
    background-color: #ffffff;
    border-radius: 9px;
    inset: 0;
    box-shadow: 0 2px 4px #00230b33;
    transition: all 0.2s ease-in-out;
  }
`;
const Switch = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const value = !checked;
    setChecked(value);
    onChange && onChange(value);
  };
  return (
    <SwitchWrapper checked={checked} onClick={handleChange}>
      <SwitchHandle checked={checked}></SwitchHandle>
    </SwitchWrapper>
  );
};

export default Switch;
