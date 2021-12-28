import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="py-3 px-6 text-xl flex justify-between">
      <div className="flex flex-1 text-left space-x-5">
        <span className="cursor-pointer hover:text-teal-500">Products</span>
        <div className="border-2 border-gray-300 px-2 text-sm">
          <input className="outline-none align-middle" type="text" />
          <Search style={{ color: "gray", fontSize: "16px" }} />
        </div>
      </div>
      <div className="flex-1 text-center font-bold text-2xl">Florange Fashions.</div>
      <div className="flex-1 text-right space-x-5">
        <span className="cursor-pointer hover:text-teal-500">Register</span>
        <span className="cursor-pointer hover:text-teal-500">Signin</span>
        <span className="cursor-pointer hover:text-teal-500">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
