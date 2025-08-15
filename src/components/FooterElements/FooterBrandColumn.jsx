import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function FooterBrandColumn() {
    return (
        <div className="space-y-5">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                E-Shop
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
                Premium shopping experience with curated collections and fast delivery.
            </p>
            <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </a>
            </div>
        </div>
    )
}