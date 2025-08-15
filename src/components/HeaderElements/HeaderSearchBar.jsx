import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function HeaderSearchBar() {
    return (
        <div className="hidden md:flex flex-grow mx-8 max-w-2xl relative">
            <input
                type="text"
                placeholder="Search for products, brands..."
                className="w-full pl-12 pr-6 py-3 border-0 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Search
            </button>
        </div>
    )
}