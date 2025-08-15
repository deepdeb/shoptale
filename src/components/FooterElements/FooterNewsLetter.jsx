export default function FooterNewsLetter() {
    return (
        <div>
            <h3 className="text-white font-semibold text-lg mb-6 pb-2 border-b border-gray-800">
                Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-6">
                Subscribe for exclusive offers and updates
            </p>
            <div className="flex">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-l-md focus:outline-none bg-gray-800 border border-gray-700 text-white flex-grow text-sm placeholder-gray-500 focus:border-blue-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-r-md hover:opacity-90 transition-opacity text-sm font-medium">
                    Subscribe
                </button>
            </div>
            <div className="mt-4 flex items-center">
                <input type="checkbox" id="privacy-check" className="mr-2 accent-blue-500" />
                <label htmlFor="privacy-check" className="text-gray-400 text-xs">
                    I agree to the privacy policy
                </label>
            </div>
        </div>
    )
}