import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard, faCcPaypal, faCcApplePay } from '@fortawesome/free-brands-svg-icons';


export default function FooterBottomBar() {
    return (
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
            </div>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    Terms & Conditions
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    Cookies
                </a>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <span className="text-gray-500 text-sm">Payments:</span>
                <div className="flex space-x-2">
                    <FontAwesomeIcon icon={faCcVisa} className="text-gray-400 w-5 h-5" />
                    <FontAwesomeIcon icon={faCcMastercard} className="text-gray-400 w-5 h-5" />
                    <FontAwesomeIcon icon={faCcPaypal} className="text-gray-400 w-5 h-5" />
                    <FontAwesomeIcon icon={faCcApplePay} className="text-gray-400 w-5 h-5" />
                </div>
            </div>
        </div>
    )
}