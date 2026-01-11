import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});

export const {increment, incrementByAmount} = cartSlice.actions;
export default cartSlice.reducer;