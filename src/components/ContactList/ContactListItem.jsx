import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import defaultPhoto from '../../images/defaultphotocontacts.png';

import { deleteContact } from 'redux/contacts/operations';
import s from './ContactList.module.css';
import { ContactEditModal } from 'components/ContactEditModal/ContactEditModal';

const ContactListItem = ({ id, name, phone }) => {
  const [showModal, setShowModal] = useState(false);

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

      <ul className={s.item_box_btn}>
        <li>
          <button
            className={classNames(s.btn_change, s.btn_edit)}
            name="edit"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <FiEdit3 />
          </button>
        </li>

        <li>
          <button
            className={s.btn_change}
            name="del"
            type="button"
            onClick={handleDelete}
          >
            <FiTrash2 />
          </button>
        </li>
      </ul>

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
