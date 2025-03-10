import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeFromCart } from "../redux/features/cart/cartSlice";
import { useMemo } from "react";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }
  function handleRemove(id) {
    dispatch(removeFromCart(id));
  }

  const subtotal = useMemo(() => {
    return cartItems
      .reduce(
        (totalAccumulator, item) =>
          totalAccumulator + item.quantity * item.newPrice,
        0
      )
      .toFixed(2);
  }, [cartItems]);

  return (
    <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <div className="text-lg font-medium text-gray-900">Shopping cart</div>
          <div className="ml-3 flex h-7 items-center ">
            <button
              type="button"
              onClick={handleClearCart}
              disabled={!cartItems.length}
              className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed "
            >
              <span className="">Clear Cart</span>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">No items in the cart</p>
            ) : (
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        alt={item.title}
                        src={`/src/assets/assets/books/${item.coverImage}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link to="/">{item.title}</Link>
                          </h3>
                          <p className="sm:ml-4">
                            ${(item.quantity * item.newPrice).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 capitalize">
                          <strong>Category:</strong> {item.category}
                        </p>
                      </div>
                      <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                        <p className="text-gray-500">
                          <strong>Qty:</strong> {item.quantity}
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => {
                              handleRemove(item._id);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center rounded-md border border-transparent bg-gray-300 px-6 py-3 text-base font-medium text-gray-500 cursor-not-allowed">
              Checkout
            </div>
          ) : (
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          )}
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center rounded-md border border-transparent bg-gray-300 px-6 py-3 text-base font-medium text-gray-500 cursor-not-allowed">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </div>
          ) : (
            <Link to="/">
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
