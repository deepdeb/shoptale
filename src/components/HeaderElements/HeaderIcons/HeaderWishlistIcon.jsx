import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderWishlistIcon() {
    return (
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 cursor-pointer transition-colors">
            <FontAwesomeIcon
                icon={faHeart}
                className="text-gray-600 hover:text-red-500 text-lg transition-colors"
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
            </span>
        </div>
    )
}