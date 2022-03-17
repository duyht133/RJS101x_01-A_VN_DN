import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducerThunk";
import { selectUser } from "../redux/selector";

const Dashboard = () => {
  // Select data from store
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
    return (
      <>
        <h1>Dashboard</h1>
        <h2>
          Welcome {user.firstName}
        </h2>
        <Link to="/home" onClick={handleLogout}>
          Log out
        </Link>
      </>
    );
  
};
export default Dashboard;
