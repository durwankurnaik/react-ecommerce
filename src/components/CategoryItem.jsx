import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <>
      <span className="cursor-pointer">
        <div className="flex flex-col rounded-xl h-[500px] w-[300px] shadow-md">
          <img src={item.img} alt="nothing" />
          <div className="text-xl my-8 text-center">{item.title}</div>
        </div>
      </span>
    </>
  );
};

export default CategoryItem;
