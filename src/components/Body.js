import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [list,setList] = useState([
    {
      info: {
        id: "485445",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 3.9,
        sla: {
          slaString: "30-35 mins",
        },
      },
    },
    {
      info: {
        id: "485446",
        name: "Bismillah",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.5,
        sla: {
          slaString: "30-35 mins",
        },
      },
    },
  ]);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          list2 = list.filter((res) => res.info.avgRating >= 4.5);
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
