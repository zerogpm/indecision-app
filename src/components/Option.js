import React from "react";

const Option = (props) => (
  <div>
    <div>{props.item}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.item);
        }}>
        remove
      </button>
    </div>
  </div>
);

export default Option;