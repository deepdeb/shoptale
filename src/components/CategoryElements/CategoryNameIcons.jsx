import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoryNameIcons({ categories }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {categories.map((category) => (
                <div
                    key={category.name}
                    className="group relative bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                    <div className="p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                            <FontAwesomeIcon
                                icon={category.icon}
                                className="text-2xl"
                            />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                        <p className="text-xs text-gray-500">Shop Now</p>
                    </div>
                    <div className="absolute inset-0 border border-gray-200 rounded-xl pointer-events-none group-hover:border-blue-300 transition-colors"></div>
                </div>
            ))}
        </div>
    )
}