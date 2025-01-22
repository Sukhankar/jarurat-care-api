const express = require("express");
const {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} = require("../controllers/resourceController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { roleMiddleware } = require("../middlewares/roleMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, roleMiddleware("Admin"), createResource);
router.get("/all", authMiddleware, getAllResources);
router.get("/byId/:id", authMiddleware, getResourceById);
router.put("/update/:id", authMiddleware, roleMiddleware("Admin"), updateResource);
router.delete("/delete/:id", authMiddleware, roleMiddleware("Admin"), deleteResource);

module.exports = router;
