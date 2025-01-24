import React from "react";

const Items = ({ strMeal, strMealThumb }) => {
  return (
    <div className="p-2 bg-white shadow-sm rounded-md">
      <img src={strMealThumb} alt={strMeal} className="w-[300px] h-[250px]" />
      <div className="flex items-center font-semibold pt-4 px-2">
        <p>{strMeal}</p>
      </div>
    </div>
  );
};

export default Items;
