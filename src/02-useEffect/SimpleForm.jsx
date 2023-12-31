import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "alirio@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // // console.log('useEffect');
  }, []);

  useEffect(() => {
    // console.log('formState cambió');
  }, [formState]);
  
  useEffect(() => {
    // console.log('email cambió');
  }, [email]);

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  


  return (
    <>
      <h1>Simple Form</h1>

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
    {
        username === 'strider2' && <Message />
    }

    </>

  );
};
