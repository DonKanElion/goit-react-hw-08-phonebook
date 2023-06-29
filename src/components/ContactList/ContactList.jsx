import { useSelector } from 'react-redux';
import { getFilterValue, selectVisibleContacts } from 'redux/selectors';
import classNames from 'classnames';

import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

const getVisibleContacts = (contacts, query) => {
  if (query !== '') {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query.toLowerCase())
    );
  }
  return contacts;
};

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  
  const query = useSelector(getFilterValue);

  const visibleContacts = getVisibleContacts(contacts, query);

  return (
    <div className={classNames(s.box, s.contactForm)}>
      <h3 className={s.title_comp}>Contacts</h3>

      <ul className={s.list}>
        {visibleContacts.map(({ id, name, phone }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={phone}
            ></ContactListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
