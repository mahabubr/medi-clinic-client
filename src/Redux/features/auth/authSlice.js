import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../../Firebase/firebase.config"

const initialState = {
    user: {
        email: "",
        role: ''
    },
    isLoading: true,
    isError: false,
    error: ''
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email
})

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    return data.user.email
})

export const googleLogin = createAsyncThunk('/auth/googleLogin', async () => {
    const googleProvider = new GoogleAuthProvider()
    const data = await signInWithPopup(auth, googleProvider)
    return data.user.email
})

export const facebookLogin = createAsyncThunk('/auth/facebookLogin', async () => {
    const facebookProvider = new FacebookAuthProvider()
    const data = await signInWithPopup(auth, facebookProvider)
    return data.user.email
})

export const githubLogin = createAsyncThunk('/auth/githubLogin', async () => {
    const githubProvider = new GithubAuthProvider()
    const data = await signInWithPopup(auth, githubProvider)
    return data.user.email
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user.email = ''
        },
        setUser: (state, { payload }) => {
            state.user.email = payload
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.user.email = action.payload
                state.error = ''
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user.email = ''
                state.error = action.error.message
            })

            .addCase(loginUser.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.user.email = action.payload
                state.error = ''
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user.email = ''
                state.error = action.error.message
            })

            .addCase(googleLogin.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.user.email = action.payload
                state.error = ''
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user.email = ''
                state.error = action.error.message
            })

            .addCase(facebookLogin.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            })
            .addCase(facebookLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.user.email = action.payload
                state.error = ''
            })
            .addCase(facebookLogin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user.email = ''
                state.error = action.error.message
            })

            .addCase(githubLogin.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            })
            .addCase(githubLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.user.email = action.payload
                state.error = ''
            })
            .addCase(githubLogin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user.email = ''
                state.error = action.error.message
            })
    }
})

export const { logout, setUser } = authSlice.actions
export default authSlice.reducer