// додати кнопку повернутись назад
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Link to="/">Back</Link>
      {/* <button to="/">Back</button> */}
      <h2>Упс...щось пішло не так...</h2>
    </>
  );
};

export default NotFound;
