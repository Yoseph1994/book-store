import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

function Card({ book }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return (
    <div className="rounded-lg transition-shadow duration-300 p-4">
      <div className="grid grid-cols-1 gap-6 items-center">
        <div className="border rounded-md overflow-hidden relative">
          <Link to={`/book/${book?._id}`}>
            <img
              src={`src/assets/assets/books/${book?.coverImage}`}
              alt={book?.title}
              className="w-full h-full object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-3">{book?.title}</h3>
              <p className="text-gray-300 mb-5">
                {book?.description.length > 80
                  ? `${book?.description.slice(0, 80)}...`
                  : book?.description}
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-medium mb-2">
            ${book?.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${book?.oldPrice}
            </span>
          </p>
          <button
            onClick={handleAddToCart}
            className="btn-primary px-6 space-x-1 flex items-center gap-1"
          >
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
