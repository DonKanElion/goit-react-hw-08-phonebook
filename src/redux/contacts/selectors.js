export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


// export const selectVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filterValue = getFilterValue(state);

//   return !contacts
//     ? []
//     : contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filterValue.toLowerCase())
//       );
// };
