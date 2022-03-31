import React from "react";
import { ViewGridIcon } from "@heroicons/react/solid";

const HomeHeader = () => {
  return (
    <header className="flex justify-between px-5 py-3 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-8 w-8 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <img
          className="h-8 w-8 object-cover rounded-full cursor-pointer hover:scale-105 transition duration-150 transform"
          loading="lazy"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU"
          alt="profile"
        />
      </div>
    </header>
  );
};

export default HomeHeader;
