import { faHome, faStore, faChevronDown, faInfoCircle, faEnvelope, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderNavigation() {
    return (
        <nav className="hidden md:block border-t border-gray-100 py-2">
            <div className="container mx-auto px-4">
                <ul className="flex items-center justify-center space-x-8">
                    <li>
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center">
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center">
                            <FontAwesomeIcon icon={faStore} className="mr-2" />
                            Shop
                        </a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center">
                            <FontAwesomeIcon icon={faBoxes} className="mr-2" />
                            Categories
                            <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
                        </a>
                        {/* Mega menu would go here */}
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center">
                            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}