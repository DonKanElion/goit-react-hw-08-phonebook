import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import defaultPhoto from 'defaultphotocontacts.png';

import { deleteContact } from 'redux/contacts/operations';
import s from './ContactList.module.css';
// import { ContactEditModal } from 'components/ContactEditModal/ContactEditModal';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  
  // const openModal = (id, name, phone) => {
  //   console.log('Open modal');
  //   return <ContactEditModal id={id} name={name} phone={phone} />;
  // };

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
      <br />
      <button
        className={s.btn_del}
        name="edit"
        type="button"
        // handleClick={openModal(id, name, phone)}
      >
        Ed
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
