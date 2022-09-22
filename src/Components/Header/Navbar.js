import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/Header.css";
import AuthContext from "../../store/authContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const [toggleHam, setToogleHam] = useState(false);

  const hamClickHandler = () => {
    setToogleHam(true);
  };

  const crossHandler = () => {
    setToogleHam(false);
  };

  const logoutHandler = () => {
    setToogleHam(false);
    authCtx.logout();
  };
  return (
    <div className="nav-link">
      {authCtx.isLoggedIn && (
        <div className={`wrap-link ${!toggleHam ? "fact" : "cool"}`}>
          <div className="cross-bar" onClick={crossHandler}>
            <ImCross className="cross" />
          </div>

          <NavLink to="/changepass" onClick={() => setToogleHam(false)}>
            Change Password
          </NavLink>
          {authCtx.isLoggedIn && (
            <NavLink to="/profile" onClick={() => setToogleHam(false)}>
              Profile
            </NavLink>
          )}

          <div>
            {!authCtx.isLoggedIn ? (
              <NavLink to="/auth">Login</NavLink>
            ) : (
              <button className="button" onClick={logoutHandler}>
                Logout
              </button>
            )}
          </div>
        </div>
      )}

      <div className="ham" onClick={hamClickHandler}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
