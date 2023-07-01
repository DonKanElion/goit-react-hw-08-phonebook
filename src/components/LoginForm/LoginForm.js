// import { useDispatch } from "react-redux";
// import { logIn}
// import css

export const LoginForm = () => {
  return (
    <form autoComplete="off">
      <label>
        Email
        <imput type="email" name="email" />
      </label>
      <label>
        Password
        <imput type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
