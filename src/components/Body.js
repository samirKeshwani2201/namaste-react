import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestrauntCard from "./RestrurantCard";
import Shimmer from "./Shimmer"
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [allrestaurants, setAllRestaurants] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const [searchText, setSearchText] = useState(""); //used to create state variable

    useEffect(() => {
        getRestaurants();
    }, []);
    // shahkeshh

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
            <div className=" shadow-lg search-container my-5 p-4 bg-pink-50">
                <input type="text" className="focus:bg-green-50 p-2 m-2" placeholder="Search" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }
                    }
                />
                <button data-testid="search-btn"
                    className="m-2 p-2 bg-purple-900  hover:bg-gray-500   text-white rounded-md"
                    onClick={
                        () => {
                            // nedd to filter the data 
                            const data = filterData(searchText, allrestaurants);
                            setFilteredRestaurants(data);
                        }
                    }
                >Search</button>

                <input value={user.name} onChange={
                    e => setUser(
                        {
                            ...user,
                            name: e.target.value,
                        }
                    )
                } >

                </input>

                <input value={user.email} onChange={
                    e => setUser(
                        {
                            ...user,
                            email: e.target.value,

                        }
                    )
                } >

                </input>
            </div>

            <div data-testid="res-list" className="flex flex-wrap justify-center">
                {
                    filteredrestaurants.map(restraurant => {
                        return <Link key={restraurant.data.id} to={"/restaurant/" + restraurant.data.id}><RestrauntCard   {...restraurant.data} />
                        </Link>
                    })
                }

            </div>
        </>
    );
};

export default Body;
