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

async function addFacultyMember(req, res) {
  try {
    const newMember = await Member.create(req.body);
    res.status(201).send({ data: newMember });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
async function deleteFacultyMember(req, res) {
  try {
    const { _id } = req.params._id;
    const member = await Member.findOneAndDelete(_id);
    res.status(200).send({ data: member });
  } catch (error) {
    console.log(error);
  }
}

async function updateFacultyMember(req, res) {
  try {
    const member = await Member.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(200).send({ data: member });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllFacultyMembers,
  addFacultyMember,
  deleteFacultyMember,
  updateFacultyMember,
};
