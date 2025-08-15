import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTruck } from '@fortawesome/free-solid-svg-icons';

export default function TrustIndicators() {
    return (
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-4">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faTruck} className="text-blue-600 text-sm" />
                </div>
                <span className="text-sm text-gray-600">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-sm" />
                </div>
                <span className="text-sm text-gray-600">Secure Checkout</span>
            </div>
        </div>
    )

}