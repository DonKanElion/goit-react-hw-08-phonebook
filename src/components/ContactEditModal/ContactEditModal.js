import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { editContact } from 'redux/contacts/operations';

import s from './ContactEditModal.module.css';
import s_form from '../Form/Form.module.css';

export const ContactEditModal = (id, name, phone) => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log(id, name, phone);
    dispatch(editContact({ id, name, phone }));
  };

  return (
    <div className={s.backdrop}>
      <div className={s.edit_contact_modal}>
        <button className={s.btn_close}>Х</button>
        <p className={s.modal_title}>Edit contact</p>

        <form className={s_form.form} onSubmit={handleSubmit}>
          <label className={s_form.label}>
            Name
            <input className={s_form.input} type="text" name="name"></input>
          </label>

          <label className={s_form.label}>
            Phone
            <input className={s_form.input} type="text" name="phone"></input>
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
};
