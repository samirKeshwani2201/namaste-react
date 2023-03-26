import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            addItem: (state, action) => {
                // here we will get the item which we want to add to our cart 
                // state is the initial state and action  is the data which is coming in
                // state is the previous state 
                state.items.push(action.payload);

            },
            removeItem: (state, action) => {
                state.items.pop();

            },
            clearCart: (state) => {
                state.items = [];

            },
        },
    });

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
