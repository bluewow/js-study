import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center mb-[20px]">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <img
        className="w-[30px] ml-2"
        src="/images/icon.png"
        alt="todo-icon"
      ></img>
    </div>
  );
};
