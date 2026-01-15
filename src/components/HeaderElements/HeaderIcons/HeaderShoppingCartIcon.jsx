import { FaShoppingBag } from "react-icons/fa";

export default function HeaderShoppingCartIcon() {
    return (
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 cursor-pointer transition-colors">
            <FaShoppingBag className="text-gray-600 hover:text-blue-600 text-lg transition-colors"/>
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
            </span>
        </div>
    )
}