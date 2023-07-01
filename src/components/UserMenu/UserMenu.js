// import { useAuth } from "hooks/useAuth";

export const UserMemu = () => {
  return (
    <div>
      <p>Welcome, Antoshka</p>
      <button
        type="button"
        onClick={() => console.log('Клік по лог Ауту (dispatch)')}
      >
        Logout
      </button>
    </div>
  );
};
