import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [
    { id: 'id-1', name: 'Testing Holly', phone: '443-89-12' },
    { id: 'id-2', name: 'Bradley Cooper', phone: '443-89-12' },
    { id: 'id-3', name: 'Elijah Jordan', phone: '443-89-12' },
  ],
  isLoading: false,
  error: null,
};

const hundlePending = state => {
  state.contacts.isLoading = true;
};

const hundleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: hundlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.error]: hundleRejected,
    [addContact.pending]: hundlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: hundleRejected,
    [deleteContact.pending]: hundlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: hundleRejected,
  },
});

const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer,
);
