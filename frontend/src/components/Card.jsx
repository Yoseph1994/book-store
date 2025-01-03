import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Card({ book }) {
  return (
    <div className="card-container rounded-lg transition-shadow duration-300 relative overflow-hidden">
      <Link to={`/book/${book?._id}`}>
        <img
          src={`src/assets/assets/books/${book?.coverImage}`}
          alt={book?.title}
          className="card-image w-full h-full object-cover"
        />
        <div className="card-details absolute inset-0 bg-black bg-opacity-75 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-3">{book?.title}</h3>
          <p className="text-gray-300 mb-5">
            {book?.description.length > 80
              ? `${book?.description.slice(0, 80)}...`
              : book?.description}
          </p>
          <p className="font-medium mb-5">
            ${book?.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${book?.oldPrice}
            </span>
          </p>
          <button className="btn-primary px-6 space-x-1 flex items-center gap-1">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Card;
