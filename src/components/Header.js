import { useState, useContext } from "react";
import Logo from "../assets/img/foodvillalogo.png"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
    // API call to check authentication 
    return false;

};


const Title = () => (
    <Link to="/">
        <img data-testid="logo" className="h-28 p-2" alt="logo" src={Logo} />
    </Link>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg" >
            <Title />
            <div className="nav-items" >
                <ul className="flex py-10">

                    <li className="px-2"> <Link to="/">Home </Link></li>
                    <li className="px-2"> <Link to="/about">About  </Link></li>
                    <li className="px-2"> <Link to="/contact">Contact  </Link></li>
                    <li className="px-2"> <Link to="/instamart">Instamart  </Link></li>
                    <Link to="/cart">
                        <li data-testid="cart" className="px-2">Cart- {cartItems.length} items
                        </li>
                    </Link>

                </ul>
            </div>


            <h1 className="p-10 font-bold text-red-900">{user.email} </h1>
            {
                (isLoggedIn) ? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>) : (<button onClick={() => setIsLoggedIn(true)}>Login</button>)
            }

        </div>
    );
};

export default Header;
