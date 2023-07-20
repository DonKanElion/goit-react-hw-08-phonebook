import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Testing Holly', number: '443-89-12' },
      { id: 'id-2', name: 'Bradley Cooper', number: '443-89-12' },
      { id: 'id-3', name: 'Elijah Jordan', number: '443-89-12' },
    ],
    isLoading: false,
    error: null,
  },
  filter: '',
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
  reducers: {
    setFilter: {
      reducer(state, action) {
        return {
          ...state,
          filter: action.payload,
        };
      },
    },
  },
  extraReducers: {
    [fetchContacts.pending]: hundlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.error]: hundleRejected,
    [addContact.pending]: hundlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: hundleRejected,
    [deleteContact.pending]: hundlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: hundleRejected,
  },
});

const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
