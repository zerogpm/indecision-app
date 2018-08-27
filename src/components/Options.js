import Option from "./Option";
import React from "react";

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      <ol>
        {props.options.map((item) => (
          <Option
            key={item}
            item={item}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

export default Options;