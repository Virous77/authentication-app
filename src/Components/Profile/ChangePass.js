import React, { useState, useContext, Fragment } from "react";
import AuthContext from "../../store/authContext";
import "../../Styles/Profile.css";
import { useNavigate } from "react-router-dom";
import Errors from "../Error/Errors";

const ChangePass = () => {
  const authCtx = useContext(AuthContext);
  const [changePass, setChangePass] = useState("");
  const [successFull, setSuccessFull] = useState("");

  const navigate = useNavigate();

  const inputChanagePassHandler = (e) => {
    setChangePass(e.target.value);
  };

  const changePassSubmitHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDm-5YxNAhWT146DjTxDiYS3QzhAiZQz5U",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: changePass,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage;
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "TOKEN_EXPIRED") {
          setSuccessFull(
            "Session is expired. You need to Logout & Login again & then set New Password."
          );
        } else if (
          err.message ===
          "WEAK_PASSWORD : Password should be at least 6 characters"
        ) {
          setSuccessFull(
            "WEAK PASSWORD : Password should be at least 6 characters"
          );
        } else {
          setSuccessFull(err.message);
        }
      });
  };

  console.log(successFull.length);

  return (
    <Fragment>
      <Errors title={successFull} />
      <form className="changePass" onSubmit={changePassSubmitHandler}>
        <label htmlFor="new">New Password</label>
        <input
          className="changeInput"
          type="text"
          id="new"
          value={changePass}
          onChange={inputChanagePassHandler}
        />
        <div>
          <button className="changeButton">Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ChangePass;
