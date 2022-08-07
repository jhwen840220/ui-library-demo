import React from "react";
import styled from "styled-components";
var StyledButton = styled.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-jaklmm-0"
})(["color:#ffffff;border-radius:4px;font-size:14px;line-height:20px;font-weight:500;padding:6px 16px;border-width:1px;border-style:solid;box-sizing:border-box;display:flex;align-items:center;justify-content:center;", ""], function (_ref) {
  var level = _ref.level;

  switch (level) {
    case "danger":
      return "\n\t\t\t\t\tbackground-color: #f4511e;\n\t\t\t\t\tborder-color: #f4511e;\n\t\t\t\t";

    case "primary":
    default:
      return "\n\t\t\t\t\tbackground-color: #1e9fd2;\n\t\t\t\t\tborder-color: #1e9fd2;\n\t\t\t\t";
  }
});

var Button = function Button(_ref2) {
  var level = _ref2.level,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement(StyledButton, {
    level: level
  }, children);
};

export default Button;