import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginService, register as registerService } from '../../services/authService';

// Async thunk for login
export const login = createAsyncThunk('auth/login', async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await loginService(username, password);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Async thunk for registration
export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    try {
        const response = await registerService(userData);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: null,
        error: null,
        registered: false,
    },
    reducers: {
        logout: (state) => {
        state.user = null;
        state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        // Login cases
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload.message;
        })

        // Register cases
        .addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.registered = false;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.registered = true;  // Registration successful
        })
        .addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
            state.registered = false;
        });
    },
});

export default authSlice.reducer;
