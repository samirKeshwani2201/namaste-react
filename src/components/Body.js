import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestrauntCard from "./RestrurantCard";
import Shimmer from "./Shimmer"
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [allrestaurants, setAllRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");//used to create state variable

    useEffect(() => {
        getRestaurants();
    }, []);


    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
        // It returns a readable stream ,and it needs to be converted to json object 
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>Offline ,please check your internet connection</h1>
    }


    // Early return (not render component)
    if (!allrestaurants)
        return null;

    if (allrestaurants.length !== 0 && filteredrestaurants?.length === 0) return <h1>No restraunt match your search</h1>

    return (allrestaurants?.length === 0) ? (<Shimmer />) : (
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
                            const data = filterData(searchText, allrestaurants);
                            setFilteredRestaurants(data);
                        }
                    }
                >Search</button>
            </div>

            <div className="restaurant-list">
                {
                    filteredrestaurants.map(restraurant => {
                        return <Link key={restraurant.data.id} to={"/restaurant/" + restraurant.data.id}><RestrauntCard {...restraurant.data} />
                        </Link>
                    })
                }


            </div>
        </>
    );
};

export default Body;
