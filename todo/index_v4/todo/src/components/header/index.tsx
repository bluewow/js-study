import React from "react";

export const Header = ({ title, iconUrl, headerContainerStyle }) => {
  return (
    <div className={headerContainerStyle}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <img className="w-[30px] ml-2" src={iconUrl} alt="todo-icon"></img>
    </div>
  );
};
