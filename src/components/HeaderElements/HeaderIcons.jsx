import HeaderMobileMenuIcon from "./HeaderIcons/HeaderMobileMenuIcon";
import HeaderShoppingCartIcon from "./HeaderIcons/HeaderShoppingCartIcon";
import HeaderUserIcon from "./HeaderIcons/HeaderUserIcon";
import HeaderWishlistIcon from "./HeaderIcons/HeaderWishlistIcon";


export default function HeaderIcons() {
    return (
        <div className="flex items-center space-x-6">
            <HeaderUserIcon/>
            <HeaderWishlistIcon/>
            <HeaderShoppingCartIcon/>
            <HeaderMobileMenuIcon/>
        </div>
    )
}