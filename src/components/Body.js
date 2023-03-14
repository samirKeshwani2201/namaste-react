import { useState } from "react";
import { restaurantList } from "../constants"
import RestrauntCard from "./RestrurantCard";


function filterData(searchText, restaurants) {
    return restaurantList.filter((restaurant) => restaurant.data.name.includes(searchText))

}
const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);

    const [searchText, setSearchText] = useState();//used to create state variable

    return (

        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }
                    }
                />
                <button className="search-btn"
                    onClick={
                        () => {
                            // nedd to filter the data 
                            const data = filterData(searchText, restaurants);
                            setRestaurants(data);
                        }
                    }
                >Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map(restraurant => {

                        return <RestrauntCard {...restraurant.data} key={restraurant.data.id} />
                    })
                }


            </div>
        </>
    );
};

export default Body;
