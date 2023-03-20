import { useState } from "react";
import Logo from "../assets/img/foodvillalogo.png"
import { Link } from "react-router-dom"
const loggedInUser = () => {
    // API call to check authentication 
    return false;

};


const Title = () => (
    <Link to="/">
        <img className="h-28 p-2" alt="logo" src={Logo} />
    </Link>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg" >
            <Title />
            <div className="nav-items" >
                <ul className="flex py-10">

                    <li className="px-2"> <Link to="/">Home </Link></li>


                    <li className="px-2"> <Link to="/about">About  </Link></li>
                    <li className="px-2"> <Link to="/contact">Contact  </Link></li>

                    <li className="px-2">Cart</li>

                    <li className="px-2"> <Link to="/instamart">Instamart  </Link></li>

                </ul>
            </div>

            {
                (isLoggedIn) ? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>) : (<button onClick={() => setIsLoggedIn(true)}>Login</button>)
            }

        </div>
    );
};

export default Header;
