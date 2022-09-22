import React, { useContext } from "react";
import "../../Styles/Profile.css";
import AuthContext from "../../store/authContext";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  return (
    <section className="profile-section">
      <div className="profile">
        <h2 className="userNam">{authCtx.userName}</h2>

        <h1>Welcome to profileZone</h1>
        <p>
          Be courageous. Challenge orthodoxy. Stand up for what you believe in.
          When you are in your rocking chair talking to your grandchildren many
          years from now, be sure you have a good story to tell.
        </p>
      </div>
    </section>
  );
};

export default Profile;
