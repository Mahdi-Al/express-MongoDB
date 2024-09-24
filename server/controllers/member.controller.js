const Member = require("../models/member.model");

async function getAllFacultyMembers(req, res) {
  try {
    console.log("Before querying the database...");
    const members = await Member.find();
    console.log("After querying the database:", members);
    res.status(200).send(members);
  } catch (error) {
    console.log("Error fetching members:", error);
    res.status(500).send({ message: "Error fetching members" });
  }
}

module.exports = { getAllFacultyMembers };
