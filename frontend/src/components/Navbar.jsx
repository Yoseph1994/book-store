import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = false;
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <header className="max-w-5xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center space-x-1">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* search input */}
          <div className="flex items-center gap-4 md:gap-16">
            <div className="relative sm:w-72 w-40 space-x-2">
              <IoSearchOutline className="absolute inline-block left-4 inset-y-2" />
              <input
                type="text"
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          {isLoggedIn ? (
            <p>User</p>
          ) : (
            <Link to="/login">
              <HiOutlineUser className="size-6" />
            </Link>
          )}
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md space-x-2"
          >
            <HiOutlineShoppingCart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
