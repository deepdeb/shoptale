import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderTopbar() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm py-3 px-4">
            <div className="container mx-auto flex justify-end">
                <div className="flex items-center space-x-4">
                    <span>Free shipping on orders over $50</span>
                    <span>|</span>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPhone} className="text-xs" />
                        <span>Support: (123) 456-7890</span>
                    </div>
                </div>
            </div>
        </div>
    )
}