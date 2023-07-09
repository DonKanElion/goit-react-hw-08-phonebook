// import { useAuth } from "hooks/useAuth";

export const UserMemu = () => {
  return (
    <div>
      <h2>Welcome, Antoshka</h2>
      <button
        type="button"
        onClick={() => console.log('Click on the LogOut (dispatch)')}
      >
        LogOut
      </button>
    </div>
  );
};
