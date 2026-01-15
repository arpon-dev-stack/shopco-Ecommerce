import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            state.cart += 1;
        },
        incrementByAmount: (state, action) => {
            state.cart += action.payload
        }
    }
});

export const {increment, incrementByAmount} = cartSlice.actions;
export default cartSlice.reducer;