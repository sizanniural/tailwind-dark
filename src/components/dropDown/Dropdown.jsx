import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const Dropdown = () => {
  return (
    <div className="flex items-center px-5 py-2 mt-2 rounded-md w-full bg-lightGrey dark:bg-darkFieldBgColor">
      <input className="bg-transparent outline-none w-full" />
      <ChevronDownIcon className="h-5 text-primaryColor" />
    </div>
  );
};

export default Dropdown;
