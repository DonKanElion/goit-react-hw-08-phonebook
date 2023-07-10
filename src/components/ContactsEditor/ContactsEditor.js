import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsEditor = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm></ContactForm>

      {isLoading && <b>Loading contacts...</b>}

      {items.length !== 0 ? (
        <>
          <Filter></Filter>
          <ContactList></ContactList>
        </>
      ) : (
        <p>Looks like you don`t have any contacts. Please add new contact.</p>
      )}

      {error && <b>Error: {error}</b>}

      {/* {isLoading && !error && <b>Request in progress...</b>}     */}
    </>
  );
};

export default ContactsEditor;
