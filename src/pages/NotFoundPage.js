// додати кнопку повернутись назад
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Link to="/">
        <button type="button">Back</button>
      </Link>

      <h2>Упс...щось пішло не так 🙆‍♂️</h2>
    </>
  );
};

export default NotFound;
