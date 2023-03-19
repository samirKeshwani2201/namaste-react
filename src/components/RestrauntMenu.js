import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer"


const RestaurantMenu = () => {


    const { resId } = useParams();

    
    const restaurant=useRestaurant(resId);

 
    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
            <div>
                {/* {console.log(restaurant?.data?.cards[0]?.card?.card?.info?.name)} */}
                <h1>Restraunt id: {resId}</h1>
                <h2> {restaurant?.cards[0]?.card?.card?.info?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>

            <div>
                <h1>Menu</h1>
                <ul>{
                    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards?.map((item) =>
                        <li key={item.card.info.id} >{item.card.info.name}</li>
                    )
                }</ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
