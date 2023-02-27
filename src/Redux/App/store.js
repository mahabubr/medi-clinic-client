import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Feature/auth/authSlice";


const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store