import React, { useEffect, useState } from "react";
import Items from "./components/items";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );

      const data = await response.json();
      if (data && data.meals.length > 0) setData(data.meals);
    };

    getData();
  }, [data]);

  return (
    <div>
      <header className="bg-white shadow-md fixed right-0 left-0 top-0 px-16 py-6 font-extrabold text-xl">
        <h1>
          🍖Meals🥗<span className="text-orange-500">API</span>🥙
        </h1>
      </header>
      <div className="flex items-center justify-center flex-wrap gap-8 pt-[120px]">
        {data.map(({ strMeal, strMealThumb, idMeal }) => (
          <Items
            strMeal={strMeal}
            strMealThumb={strMealThumb}
            idMeal={idMeal}
            key={idMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
