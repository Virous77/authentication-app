import React, { useState, useContext, Fragment } from "react";
import "../../Styles/Auth.css";
import AuthContext from "../../store/authContext";
import { useNavigate } from "react-router-dom";
import Errors from "../Error/Errors";
import Authvalidate from "./Authvalidate";

const AuthForm = () => {
  const [userInfo, setUserInfo] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [successFull, setSuccessFull] = useState("");

  const navigate = useNavigate();

  //Context Data
  const authCtx = useContext(AuthContext);

  //Name
  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  //Email
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  //Password
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  //Toggle Login
  const changeUserInfo = () => {
    setUserInfo(!userInfo);
  };

  //Submit Form
  const formSubmitHandler = (e) => {
    e.preventDefault();

    authCtx.name(name);

    //Using Firebase as a Backend
    let URL;
    if (userInfo) {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDm-5YxNAhWT146DjTxDiYS3QzhAiZQz5U";
    } else {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDm-5YxNAhWT146DjTxDiYS3QzhAiZQz5U";
    }

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          let errorMessage;
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/");
      })
      .catch((err) => {
        setSuccessFull(err.message);
      });

    setPassword("");
  };

  return (
    <Fragment>
      <Errors title={successFull} />
      <section className="form-section">
        <Authvalidate
          onSubmitHandler={formSubmitHandler}
          userInfo={userInfo}
          name={name}
          onNameChange={nameInputHandler}
          email={email}
          emailInputHandler={emailInputHandler}
          password={password}
          passwordInputHandler={passwordInputHandler}
          changeUserInfo={changeUserInfo}
        />
      </section>
    </Fragment>
  );
};

export default AuthForm;
