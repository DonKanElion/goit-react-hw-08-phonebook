export const RegisterForm = () => {
  const handelSubmit = () => {
    console.log('Hello Submit:');
  };

  return (
    <form onSubmit={handelSubmit}>
      <label>
        Username
        <input type="text" name="name"></input>
      </label>
      <label>
        Email <input type="email" name="email"></input>
      </label>
      <label>
        Password<imput type="password" name="password"></imput>
      </label>
      <button type="submit">
        Register
      </button>
    </form>
  );
};
