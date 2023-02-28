const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: {},
    isLoading: true,
    isError: false,
    error: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => { }
})

export default authSlice.reducer