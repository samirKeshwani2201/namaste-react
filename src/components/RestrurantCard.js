
import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {

    return (
        <div className="w-56 p-2 shadow-lg bg-pink-50 m-2">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2 className="font-bold text-xl">{name} </h2>
            <h3 className="break-words">{cuisines?.join(",")}</h3>
            <h4>{lastMileTravelString}  </h4>

        </div>
    )
}

export default RestrauntCard;
