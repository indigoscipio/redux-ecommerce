import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    emptyAllCart: (state) => {
      state.items = [];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && quantity >= 1) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  emptyAllCart,
  setCart,
  decreaseQuantity,
  increaseQuantity,
  setQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
