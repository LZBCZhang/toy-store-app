import React from "react";
import {noop} from "../utils";

interface Props {
    toggle: boolean;
    onToggle?: () => void;
}

const InputToggleButton: React.FC<Props> =({toggle = false, onToggle = noop}) => {
    return (
      <button className={"btn btn-link px-1"} onClick={onToggle}>
          <i className={"icon icon-md"}>{toggle ? "arrow_drop_up" : "arrow_drop_down"}</i>
      </button>
    );
};

export default InputToggleButton;