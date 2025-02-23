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
        },
        incrementOrderQuantity: (state, action) => {
            const increment = state.products.find((product) => product._id === action.payload);
            console.log(increment)
            if (increment) {
                increment.orderQuantity += 1;
                return;
            }
        },
        decrementOrderQuantity: (state, action) => {
            const decrement = state.products.find((product) => product._id === action.payload);
            console.log(decrement)
            if (decrement && decrement.orderQuantity > 1) {
                decrement.orderQuantity -= 1;
                return;
            }
        },
        removeOrderQuantity: (state, action) => {
            state.products.filter((product) => product._id !== action.payload);

        }
    }
})

export const orderedProductSelector = (state: RootState) => {
    return state.cart.products;
}

export const subTotalSelector = (state: RootState) => {
    return state.cart.products.reduce((acc, product) => {
        if (product.offerPrice) {
            return acc + product.offerPrice * product.orderQuantity
        } else {
            return acc + product.price * product.orderQuantity
        }
    }, 0)
}

export const { addProduct, incrementOrderQuantity, decrementOrderQuantity, removeOrderQuantity } = cartSlice.actions
export default cartSlice.reducer;