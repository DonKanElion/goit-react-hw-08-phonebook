import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { editContact } from 'redux/contacts/operations';
import s from './ContactEditModal.module.css';
import s_form from '../Form/Form.module.css';

export const ContactEditModal = ({ id, name, phone, onClose }) => {
  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);

  const dispatch = useDispatch();

  const onBackdropClose = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = { name: newName, number: newPhone };
    dispatch(editContact({ id, contact }));
    onClose();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        return setNewName(value);
      case 'phone':
        return setNewPhone(value);
      default:
        throw new Error(`Unsupported type of ${name}`);
    }
  };

  return (
    <div className={s.backdrop} onClick={onBackdropClose}>
      <div className={s.edit_contact_modal}>
        <button className={s.btn_close} onClick={onClose}>
          Х
        </button>
        <p className={s.modal_title}>Edit contact</p>
        <form className={s_form.form} onSubmit={handleSubmit}>
          <label className={s_form.label}>
            Name
            <input
              className={s_form.input}
              type="text"
              name="name"
              value={newName}
              onChange={handleChange}
            ></input>
          </label>

          <label className={s_form.label}>
            Phone
            <input
              className={s_form.input}
              type="text"
              name="phone"
              value={newPhone}
              onChange={handleChange}
            ></input>
          </label>
          <button
            className={classNames(s_form.btn, s_form.btn_center)}
            type="sumbit"
          >
            Save contact
          </button>
        </form>
      </div>
    </div>
  );
};

ContactEditModal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
