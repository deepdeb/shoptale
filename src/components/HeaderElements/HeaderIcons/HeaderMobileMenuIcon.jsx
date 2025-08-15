import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderMobileMenuIcon() {
    return (
        <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
    )
}