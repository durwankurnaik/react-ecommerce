import React from "react";
import { Search } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="p-4 bg-gray-300 text-xl flex justify-between">
      <div className="flex flex-1 text-left space-x-3">
        <span className="cursor-pointer">left</span>
        <div className="border-2 border-black px-2 rounded-md text-sm">
          <input
            className="bg-gray-300 outline-none align-middle"
            type="text"
          />
          <Search className="ml-1" />
        </div>
      </div>
      <div className="flex-1 text-center font-bold text-2xl">Florange</div>
      <div className="flex-1 text-right">right</div>
    </div>
  );
};

export default Navbar;
