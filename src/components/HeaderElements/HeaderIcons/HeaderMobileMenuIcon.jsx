import { FaBars } from "react-icons/fa";

export default function HeaderMobileMenuIcon() {
    return (
        <button className="md:hidden bg-gray-100 hover:bg-blue-100 p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none cursor-pointer">
            <FaBars className="text-xl" />
        </button>
    )
}