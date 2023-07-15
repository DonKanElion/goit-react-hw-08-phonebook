import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import defaultPhoto from 'defaultphotocontacts.png';

import { deleteContact } from 'redux/contacts/operations';
import s from './ContactList.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const hundleDelete = () => dispatch(deleteContact(id));

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
        <p className={s.item_number}>{number}</p>
      </div>

      <button
        className={s.btn_del}
        name="del"
        type="button"
        onClick={hundleDelete}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
