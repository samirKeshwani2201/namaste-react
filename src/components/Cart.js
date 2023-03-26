import { useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    // cartItems is subsribe to only the items array and not any other things 
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div>

        <h1 className="font-bold text-3xl" >Cart Items -{cartItems.length}</h1>

        <button className="bg-red-700 p-2 m-2" onClick={() => handleClearCart()}>Clear Cart </button>

        <div className="flex flex-wrap justify-center">
            {cartItems.map(item => <FoodItem key={item.id} {...item} />)}
        </div>
    </div>
}

export default Cart;


// item={{ ...cartItems[0] }}