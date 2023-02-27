import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from "../../../Firebase/firebase.config";


const initialState = {
    user: {},
    isLoading: true,
    isError: false,
    error: ''
}

const createUser = createAsyncThunk('auth/createUser', async (email, password) => {
    const data = createUserWithEmailAndPassword(auth, email, password)
    return data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                state.isError = false
                state.error = ''
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false
                state.user = ''
                state.isError = true
                state.error = action.error.message
            })
    }
})

export default authSlice.reducer