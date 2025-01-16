import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        Swal.fire({
          title: "Item Already Exist",
          icon: "success",
          draggable: true,
        });
      } else {
        state.cartItems.push({ ...item, quantity: 1 });

        Swal.fire({
          title: "Item Added Succesfully",
          icon: "success",
          draggable: true,
        });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems
        .map((cartItem) => {
          if (cartItem._id === itemId) {
            if (cartItem.quantity > 1) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
              return null; // Mark for removal
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem !== null);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem._id === itemId
      );

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
