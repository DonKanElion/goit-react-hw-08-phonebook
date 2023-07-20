export const selectContacts = state => state.contacts.items;
export const selectFilterValue = state => state.filter;


// ???? потрібно воно чи ні? 
export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filterValue = selectFilterValue(state);
  console.log('selecr: ', contacts);

  return !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
};