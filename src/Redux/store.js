import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice'
import authSlice from './AuthSlice'

const store = configureStore ({
    reducer: {
        cart: cartSlice,
        auth: authSlice,
    }
})

export default store;