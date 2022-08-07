function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import styled from "styled-components";
var SwitchWrapper = styled.button.withConfig({
  displayName: "switch__SwitchWrapper",
  componentId: "sc-ingpxs-0"
})(["position:relative;box-sizing:border-box;border-radius:100px;width:44px;height:22px;line-height:22px;border:0;background-color:#1e9fd2;"]);
var SwitchHandle = styled.div.withConfig({
  displayName: "switch__SwitchHandle",
  componentId: "sc-ingpxs-1"
})(["position:absolute;top:2px;left:", ";width:18px;height:18px;transition:all 0.2s ease-in-out;&:before{position:absolute;content:\"\";background-color:#ffffff;border-radius:9px;inset:0;box-shadow:0 2px 4px #00230b33;transition:all 0.2s ease-in-out;}"], function (_ref) {
  var checked = _ref.checked;
  return checked ? "calc(100% - 20px)" : "2px";
});

var Switch = function Switch(_ref2) {
  var onChange = _ref2.onChange;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var handleChange = function handleChange() {
    var value = !checked;
    setChecked(value);
    onChange && onChange(value);
  };

  return /*#__PURE__*/React.createElement(SwitchWrapper, {
    onClick: handleChange
  }, /*#__PURE__*/React.createElement(SwitchHandle, {
    checked: checked
  }));
};

export default Switch;