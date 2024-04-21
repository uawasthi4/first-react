import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (store, action) => {
      //mutating the state here
      store.items.push(action.payload);
    },
    removeItem: (store, action) => {
      const currentIndex = store.items.findIndex(action.payload);
      store.items.splice(currentIndex, 1);
    },
    clearCart: (store) => {
      /** RTK - Either mutate the original state or return a new state */
      /** state.items.length = 0; - original state = [];  */
      return { items: [] }; // this new object will be replaced inside original state = {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
