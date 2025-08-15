export default function TextOnSlider() {
    return (
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4">
            <div className="mb-4">
                <span className="text-xl font-bold mr-2">ShopTale</span>
                <span className="text-lg">First Division</span>
            </div>

            <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">Discover </h1>
                <h2 className="text-2xl md:text-4xl drop-shadow-lg">Uniqueness</h2>
            </div>

            <div className="mb-8">
                <p className="text-xl md:text-2xl mb-2 drop-shadow">Explore thousands of curated products</p>
                <p className="text-lg md:text-xl text-yellow-300 mb-2">#BuiltForYou</p>
                <p className="text-base md:text-lg">Coming soon</p>
            </div>
        </div>
    )
}