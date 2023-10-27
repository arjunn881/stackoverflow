import React, { useState } from "react";
import { Leftbar } from "../../components/leftbar/Leftbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar } from "../../components/avatar/Avatar";
import { FaBirthdayCake, FaPen } from "react-icons/fa";
import moment from "moment";
import "./UserProfile.css";

export const UserProfile = () => {
  const { id } = useParams();
  const [Switch, setSwitch] = useState(false);
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);

  return (
    <div className="home-container-1">
      <Leftbar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
                borderRadius="5px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>

              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FaBirthdayCake /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>

            {currentUser?.result._id === id && (
              <button
                type="button"
                className="edit-profile-btn"
                onClick={() => setSwitch(true)}
              >
                Edit Profile <FaPen />
              </button>
            )}
          </div>

          <>{Switch ? "EditProfileForm" : "ProfileBio"}</>
        </section>
      </div>
    </div>
  );
};
