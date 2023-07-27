import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <div className="box white_box">
      <label className={s.label}>
        <p className="section_title">Find contact by name:</p>
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
