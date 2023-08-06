import mongoose from "mongoose";
import User from "../models/auth.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUser = await User.find();
    const allUserDetails = [];

    allUser.forEach((users) => {
      allUserDetails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        joinedOn: users.joinedOn,
      });
    });

    res.status(200).json(allUserDetails);

    console.log(allUserDetails)

  } catch (error) {
    res.status(400).json({message: error.message});

  }
};
