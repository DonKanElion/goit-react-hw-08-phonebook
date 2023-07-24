// import { useDispatch, useSelector } from 'react-redux';
// import { selectFilterValue } from 'redux/filter/selectors';
// import { setFilter } from 'redux/filter/filterSlice';

import s from './Filter.module.css';

const Filter = () => {
  // const filter = useSelector(selectFilterValue);
  // const dispatch = useDispatch();


  const handleChange = evt => {
    const { value } = evt.target;
    // console.log('setFilter Func', setFilter())
    // console.log('setFilter', setFilter)

    console.log('Filter value ', value)
    // console.log(setFilter())
    // dispatch(setFilter(value));
  };

  return (
    <div className="box white_box">
      <label className={s.label}>
        <p className='section_title'>Find contact by name:</p>
        <input
          type="text"
          name="filter"
          // value={filter}
          onChange={handleChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;
