import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import styled from "styled-components";
import MyOrder from "./MyOrder";
const Wrapper = styled.section`
  .profile-container {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 20px;
  }

  .profile-details {
    margin-top: 20px;
  }

  .profile-details p {
    margin: 10px 0;
  }
`;
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
    <Wrapper>
      {state.loggedIn && (
        <>
          <div className="profile-container">
            <h2>Profile</h2>
            <div className="profile-details">
              <p>
                <strong>Name:</strong> {state.name}
              </p>
              <p>
                <strong>Email:</strong> {state.email}
              </p>
            </div>
          </div>
          <div>
            <MyOrder />
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default Profile;
