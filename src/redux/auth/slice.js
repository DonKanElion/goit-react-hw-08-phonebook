import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  _initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  get initialState() {
    return this._initialState;
  },
  set initialState(value) {
    this._initialState = value;
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log('register - rejected: ', action);
      })
      .addCase(logIn.pending, (state, action) => {
        return state;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log('logout fulfilled', state);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        if (action.error.message === 'Rejected') {
          return Notify.warning(
            'Your email and password do not match. Please try again.'
          );
        }
      })

      .addCase(logOut.pending, (state, action) => {
        return state;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state, action) => {
        // return state;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});

const authReducer = authSlice.reducer;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistAuthReducer = persistReducer(persistConfig, authReducer);
