import React from "react";

const SearchHeaderOption = ({ Icon, option, selected }) => {
  return (
    <div
      className={`flex space-x-1 pb-3 items-center ${
        selected && "text-blue-500 border-blue-500"
      } border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 transition-all duration-150 ease-in-out cursor-pointer`}
    >
      <Icon className="h-5 w-5" />
      <p className="hidden sm:inline-flex">{option}</p>
    </div>
  );
};

export default SearchHeaderOption;
