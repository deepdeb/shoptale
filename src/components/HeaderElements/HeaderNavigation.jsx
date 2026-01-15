import { faHome, faStore, faChevronDown, faInfoCircle, faEnvelope, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBoxes, FaChevronDown, FaEnvelope, FaHome, FaInfoCircle, FaStore } from 'react-icons/fa';

export default function HeaderNavigation() {
    
    const baseStyle = 'text-gray-800 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center';

    return (
        <nav className="hidden md:block border-t border-gray-100 py-2">
            <div className="container mx-auto px-4">
                <ul className="flex items-center justify-center space-x-8">
                    <li>
                        <a href="#" className={baseStyle}>
                            <FaHome className="mr-2" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className={baseStyle}>
                            <FaStore className="mr-2" />
                            Shop
                        </a>
                    </li>
                    <li className="relative group">
                        <a href="#" className={baseStyle}>
                            <FaBoxes className="mr-2" />
                            Categories
                            <FaChevronDown className="ml-1 text-xs" />
                        </a>
                        {/* Mega menu would go here */}
                    </li>
                    <li>
                        <a href="#" className={baseStyle}>
                            <FaInfoCircle className="mr-2" />
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className={baseStyle}>
                            <FaEnvelope className="mr-2" />
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}