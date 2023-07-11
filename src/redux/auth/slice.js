import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isrefreshing: false,
    },
    extraReducers: {},
});

export const authreducer = authSlice.reducer;