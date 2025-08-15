import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function FooterQuickLinks() {
    return (
        <div>
            <h3 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-gray-800">
                Quick Links
            </h3>
            <ul className="space-y-3">
                {['Home', 'Shop', 'Products', 'About', 'Contact'].map((item) => (
                    <li key={item}>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center"
                        >
                            <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 mr-2 text-blue-500" />
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}