import Option from "./Option";
import React from "react";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        onClick={props.handleDeleteOptions}
        className="button button--link"
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget-header__message">Please add an option to get started</p>}
    {
      props.options.map((item, index) => (
        <Option
          key={item}
          item={item}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;