const express = require("express");
const router = express.Router();
const memberController = require("../controllers/member.controller");
router.get("/", memberController.getAllFacultyMembers);
router.post("/", memberController.addFacultyMember);
router.patch("/:id", memberController.updateFacultyMember);
router.delete("/:id", memberController.deleteFacultyMember);
module.exports = router;
