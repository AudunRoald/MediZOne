import React from "react";

const Login = () => {
  return (
    <div>
      <input type="email" name="email" placeholder="YOUR EMAIL" required />

      <input
        type="password"
        name="password"
        placeholder="PASSWORD"
        minLength={8}
        required
      />
      <p>Password must be at least 8 characters long</p>
      <input type="name" name="name" placeholder="YOUR NAME" required />

      <button type="submit">SIGN IN</button>
    </div>
  );
};

export default Login;
