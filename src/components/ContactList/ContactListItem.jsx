import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import defaultPhoto from 'defaultphotocontacts.png';

import { deleteContact } from 'redux/contacts/operations';
import s from './ContactList.module.css';
import { ContactEditModal } from 'components/ContactEditModal/ContactEditModal';

const ContactListItem = ({ id, name, phone }) => {
  const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      console.log('Хуй зна що')
  }, [showModal])

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={s.item}>
      <img
        className={s.user_photo}
        src={defaultPhoto}
        alt="contact face or logo"
        width="28"
        height="28"
      />
      <div className={s.item_wrap}>
        <p className={s.item_name}>{name}</p>
        <p className={s.item_number}>{phone}</p>
      </div>

      <button
        className={s.btn_del}
        name="del"
        type="button"
        onClick={handleDelete}
      >
        Del
      </button>
      <button
        className={s.btn_del}
        name="edit"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ed
      </button>

      {showModal &&
        createPortal(
          <ContactEditModal
            id={id}
            name={name}
            phone={phone}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
