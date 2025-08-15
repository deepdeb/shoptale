import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderUserIcon() {
    return (
        <div className="hidden lg:flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors">
                <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-600 group-hover:text-blue-600 text-lg transition-colors"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-500">Hello, Sign in</span>
                <span className="text-sm font-medium">My Account</span>
            </div>
        </div>
    )
}