import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [list,setList] = useState(resList);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          list2 = list.filter((res) => res.info.avgRating > 4.5);
          setList(list2);
        }}
      >
        Filter Top Rated
      </button>
      <div className="res-container">
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
