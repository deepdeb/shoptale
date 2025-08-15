import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShopWithUsCard({ features }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-300"
                >
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                            <FontAwesomeIcon icon={feature.icon} className="text-xl" />
                        </div>
                    </div>
                    <div className="pt-6 text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}