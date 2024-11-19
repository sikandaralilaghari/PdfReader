import { NavLink } from "react-router-dom";
import { authStore } from "../../store/auth.store";
const TopUserBar = () => {
  const { user } = authStore();
  const { username } = user;
  return (
    <ul className="d-flex justify-content-end border fixed-top topbar">
      <NavLink
        to={"profile"}
        className="nav-link m-1 d-flex align-items-center me-3"
      >
        <span className="me-1">{username}</span>
        <img
          src={`http://localhost:5000/${user.profile}`}
          className="img"
          alt="profile"
        />
      </NavLink>
    </ul>
  );
};

export default TopUserBar;
