export const selectContacts = state => state.contacts.items;
export const selectFilterValue = state => state.filter;

// логіка з ContactsList
// export const selectVisibleContacts = (value) => {
//   const contacts = selectContacts();
//   const filterValue = selectFilterValue(value);
//   console.log('contacts: ', contacts);
//   console.log('value: ', value);


//   return !contacts
//     ? []
//     : contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filterValue.toLowerCase())
//       );
// };
