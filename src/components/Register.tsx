import React, { useState } from "react";

interface UserRegisterInputs {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
}

export default function Register() {
  const initalUser: UserRegisterInputs = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  };

  const [newUser, setNewUser] = useState<UserRegisterInputs>(initalUser);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (newUser.password !== newUser.passwordConfirm) {
      setErrorMsg(`password does not match`);
      return;
    }
    // sent newUser to database
    // implement dynamic password checking when the user types
    // implement an error message box that can display specific error msgs
    // if database result have username and email, if username exist, then throw error
    // if username and email is unique, success
    // once success, there will be page animation
    console.log(newUser);
  };
  return (
    <>
      <h3>Register your account</h3>
      <input
        placeholder="Username"
        name="username"
        value={newUser.username}
        onChange={handleChange}
      />
      <input
        placeholder="Email"
        name="email"
        type="email"
        value={newUser.email}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        value={newUser.password}
        onChange={handleChange}
      />
      <input
        placeholder="Confirm"
        name="passwordConfirm"
        type="password"
        value={newUser.passwordConfirm}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
    </>
  );
}
