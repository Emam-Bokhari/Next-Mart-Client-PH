import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ICartProduct extends IProduct {
    orderQuantity: number;
}

interface IInitialState {
    products: ICartProduct[]
    city: string;
    shippingAddress: string;
}

const initialState: IInitialState = {
    products: [],
    city: "",
    shippingAddress: ""
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

        },
        updateCity: (state, action) => {
            state.city = action.payload
        },
        updateShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
        }
    }
})

export const orderedProductSelector = (state: RootState) => {
    return state.cart.products;
}

export const orderSelector = (state: RootState) => {
    return {
        products: state.cart.products.map((product) => ({
            product: product._id,
            quantity: product.orderQuantity,
        })),
        shippingAddress: `${state.cart.shippingAddress} - ${state.cart.city}`,
        paymentMethod: "Online"
    }
}

export const grandTotalSelector = (state: RootState) => {
    const subtotal = subTotalSelector(state)
    const shippingCost = shippingCostSelector(state)
    return subtotal + shippingCost;
}

export const shippingCostSelector = (state: RootState) => {
    if (state.cart.city === "Dhaka" && state.cart.products.length > 0) {
        return 60
    } else if (state.cart.city && state.cart.city !== "Dhaka" && state.cart.products.length > 0) {
        return 120
    } else {
        return 0
    }
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

export const citySelector = (state: RootState) => {
    return state.cart.city;
}

export const shippingAddressSelector = (state: RootState) => {
    return state.cart.shippingAddress;
}

export const { addProduct, incrementOrderQuantity, decrementOrderQuantity, removeOrderQuantity, updateCity, updateShippingAddress } = cartSlice.actions
export default cartSlice.reducer;