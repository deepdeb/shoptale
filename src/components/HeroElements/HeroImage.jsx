import HeroImg from '../../assets/images/happy-shopping-woman.png'

export default function HeroImage() {
    return (
        <div className="md:w-1/2 flex justify-end relative">
            <div className="relative">
                <img
                    src={HeroImg}
                    alt="Happy shopper with purchases"
                    className="w-full max-w-xs md:max-w-sm lg:max-w-md z-10 relative transform hover:scale-105 transition-transform duration-500"
                    style={{ height: '22em' }}
                />
            </div>
        </div>
    )
}