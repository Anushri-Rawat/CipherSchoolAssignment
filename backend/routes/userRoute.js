const {
  register,
  login,
  getProfile,
  updateProfile,
  updatePassword,
  getAllUsers,
} = require("../controllers/userController");
const {
  upload,
  uploadImageOnCloud,
} = require("../controllers/imageController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.use(protect);
router
  .route("/")
  .get(getProfile)
  .patch(upload.single("profile_image"), uploadImageOnCloud, updateProfile);
router.route("/updatePassword").patch(updatePassword);

module.exports = router;
