import e from "express";

const baseURL = ""; // Write down the base URL of the created API.

const getAllUser = async () => {};

const createUser = async (userData) => {
  console.log(userData);
  try {
    userData;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {};

export { getAllUser, deleteUser, createUser };
