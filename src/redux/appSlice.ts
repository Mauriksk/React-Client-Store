import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Product {
  inInventory: number;
  max: number;
  min: number;
  name: string;
  price?: number;
  url?: string;
}

export interface AppState {
  products: Product[];
}

const initialState: AppState = {
  products: [],
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    takeOutToCart: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter((prod) => prod.name !== action.payload.name);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, takeOutToCart } = appSlice.actions;



export default appSlice.reducer;
