import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/UserContext";

function Profile() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();

  const callAbout = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (response.status === 400 || !data) {
        dispatch({ type: "CLEAR_USER" });
        navigate("/login");
      } else {
        dispatch({
          type: "SET_USER",
          payload: { name: data.full_name, email: data.email },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "CLEAR_USER" });
      navigate("/login");
    }
  };

  useEffect(() => {
    callAbout();
  }, [state.loggedIn]);

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "25px" }}>Profile</h2>

      <div style={{ textAlign: "center", fontSize: "15px" }}>
        <p>
          Username: <strong>{state.loggedIn ? state.name : "--"}</strong>
        </p>
        <p>
          Email: <strong>{state.loggedIn ? state.email : "--"}</strong>
        </p>
      </div>
    </div>
  );
}

export default Profile;
