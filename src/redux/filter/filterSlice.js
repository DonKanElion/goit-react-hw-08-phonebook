import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  redusers: {
    setFilter(state, action) {
      // state.filter = action.payload;
      console.log('action:', action);
      console.log('state:', state);

      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// витяг з домашки:

// const filtersSlice = createSlice({
//     name: "filters",
//     initialState: filtersInitialState,
//     reducers: {
//       setStatusFilter(state, action) {
//         state.status = action.payload;
//       },
//     },
//   });

//   export const { setStatusFilter } = filtersSlice.actions;
//   export const filtersReducer = filtersSlice.reducer;

//// було але не працювало....
//   export const filterSlice = createSlice({
//     name: 'filter',
//     initialState: '',
//     redusers: {
//       setFilter: {
//         reducer(state, action) {
//           // state.filter = action.payload;
//           console.log('action:', action)
//           console.log('state:', state)

//           return state = action.payload;

//         },
//       },
//     },
//   });
