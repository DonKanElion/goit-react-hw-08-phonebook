import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

import s from '../ContactList/ContactList.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    // <div className={classNames(s.box, s.contactList)}>
    <div className="box white_box">
      <label className={s.text}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={handleChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;
