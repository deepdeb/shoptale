import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductWishList() {
    return (
        <button className="absolute top-3 left-6 h-10 w-10 bg-white/50 p-2 rounded-full shadow-sm hover:text-red-500">
            <FontAwesomeIcon icon={faHeart} />
        </button>
    )
}