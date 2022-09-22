import React from "react";
import "../../Styles/Error.css";

const Authvalidate = ({
  onSubmitHandler,
  userInfo,
  name,
  onNameChange,
  email,
  emailInputHandler,
  password,
  passwordInputHandler,
  changeUserInfo,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <h2>{userInfo ? "Login" : "Signup"}</h2>
      </div>

      {!userInfo && (
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" value={name} onChange={onNameChange} />
        </div>
      )}

      <div>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailInputHandler}
        />
      </div>

      <div>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={passwordInputHandler}
        />
      </div>

      <div>
        <button>{userInfo ? "Login" : "Create new account"}</button>
      </div>

      <div className="new-account">
        <span onClick={changeUserInfo}>
          {userInfo ? "Create new account" : "Login with existing account"}
        </span>
      </div>
    </form>
  );
};

export default Authvalidate;
