import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";


const RestrauntCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
    const { user } = useContext(UserContext);
    return (
        <div className="w-56 p-2 shadow-lg bg-pink-50 m-2">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2 className="font-bold text-xl">{name} </h2>
            <h3 className="break-words">{cuisines?.join(",")}</h3>
            <h4>{lastMileTravelString}  </h4>
            <h5 className="font-bold">{user.name}</h5>

        </div>
    )
}

export default RestrauntCard;
