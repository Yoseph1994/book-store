import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../redux/features/services/BookApi";
import { getImgUrl } from "../utils/getImgUrl";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
function BookDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id);

  function handleAddToCart(book) {
    dispatch(addToCart(book));
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error During Fetching Data</p>;
  return (
    <div className="max-w-lg mx-auto shadow-md p-5 text-center">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div className="flex flex-col items-center">
        <div>
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong>{" "}
            {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book?.category}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1 "
        >
          <FiShoppingCart className="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
