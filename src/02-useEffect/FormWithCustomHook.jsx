import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Form con custom Hook</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="alirio@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="alirio@google.com"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Delete
      </button>
    </>
  );
};
