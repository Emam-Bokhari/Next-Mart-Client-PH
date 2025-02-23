import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ICartProduct extends IProduct {
    orderQuantity: number;
}

interface IInitialState {
    products: ICartProduct[]
}

const initialState: IInitialState = {
    products: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productToAdd = state.products.find((product) => product._id === action.payload._id);
            if (productToAdd) {
                productToAdd.orderQuantity += 1;
                return;
            }
            state.products.push({ ...action.payload, orderQuantity: 1 })
        }
    }
})

export const orderedProductSelector = (state: RootState) => {
    return state.cart.products;
}
export const { addProduct } = cartSlice.actions
export default cartSlice.reducer;