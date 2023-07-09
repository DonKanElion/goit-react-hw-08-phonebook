// import { useDispatch } from "react-redux";
// import { logIn}
// import css

export const LoginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    console.log('Submit LoginForm');
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
