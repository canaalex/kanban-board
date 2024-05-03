import React from "react";

const Button = ({ onClick, icon: Icon, className, dataTarget }) => {
  return (
    <button
      type="button"
      className={`btn glass-effect text-white border-0 p-1 pr-2 pl-2 ${className}`}
      data-toggle={dataTarget ? "modal" : ""}
      data-target={dataTarget}
      onClick={onClick ? onClick : () => {}}
    >
      <Icon />
    </button>
  );
};

export default Button;
