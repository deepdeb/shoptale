import { FaSearch } from "react-icons/fa";

export default function HeaderSearchBar() {
    return (
        <div className="hidden md:flex grow mx-8 max-w-2xl relative">
            <input
                type="text"
                placeholder="Search for products, brands..."
                className="w-full pl-12 pr-6 py-3 border-0 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"/>
        </div>
    )
}