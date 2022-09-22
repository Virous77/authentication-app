import React, { useState, useEffect, Fragment } from "react";
import "../../Styles/Error.css";
import { ImCross } from "react-icons/im";

const Errors = (props) => {
  const [error, setError] = useState(false);

  const cancelErrorHandler = () => {
    setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [props.title]);

  return (
    <Fragment>
      {props.title.length === 0 ? (
        ""
      ) : (
        <div>
          {!error && (
            <div>
              <div className="overlay" onClick={cancelErrorHandler}></div>
              <div className="error">
                <div onClick={cancelErrorHandler}>
                  <ImCross className="error-cancel" />
                </div>
                <p>{props.title}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Errors;
