import TrustIndicators from "../TrustIncicators";

export default function HeroTextContent() {
    return (
        <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your Perfect <span className="bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Style</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Explore thousands of curated products with fast delivery and exceptional quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-linear-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-90">
                    Shop Collection
                </button>
                <button className="border-2 border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                    Learn More
                </button>
            </div>

            <TrustIndicators />
        </div>
    )
}