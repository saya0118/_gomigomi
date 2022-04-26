import React from "react";

export const Header = () => {
  return (
    <div className="h-16">
      <div className="flex justify-between w-full content-center h-16 items-center">
        <h1 className="ml-10">Voyage Notes</h1>
        <ul className="flex">
          <li className="mr-10">
            <a>Home</a>
          </li>
          <li className="mr-10">
            <a>About</a>
          </li>
          <li className="mr-10">
            <a>Diary</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
