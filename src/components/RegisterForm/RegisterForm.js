export const RegisterForm = () => {
  return (
    <form>
      <label>
        Username
        <input type="text" name="name"></input>
      </label>
      <label>
        Email <imput type="email" name="email"></imput>
      </label>
      <label>
        Password<imput type="password" name="password"></imput>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
