import {createSlice} from '@reduxjs/toolkit';
import {createFactory} from "react";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeItem: (state, action) => {
            let index = state.items.findIndex(e => e.name === action.payload.name)
            state.items.splice(index, 1)
        },
        updateQuantity: (state, action) => {
            let index = state.items.findIndex(e => e.name === action.payload.name)
            state.items[index] = action.payload
        },
    },
});

export const {addItem, removeItem, updateQuantity} = CartSlice.actions;

export default CartSlice.reducer;
