const multer = require("multer");
const DatauriParser = require("datauri/parser");
const { uploader } = require("cloudinary");
const path = require("path");

const storage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else cb(new Error("Please upload image type file", 400), false);
};

const upload = multer({
  storage,
  fileFilter: multerFilter,
});

const uploadImageOnCloud = async (req, res, next) => {
  if (!req.file) return next();
  const parser = new DatauriParser();
  const dataUri = (req) =>
    parser.format(
      path.extname(req.file.originalname).toString(),
      req.file.buffer
    );
  const file = dataUri(req).content;
  await uploader
    .upload(file)
    .then((result) => {
      req.body.profile_image = result.url;
    })
    .catch((err) =>
      res.status(400).json({
        messge: "someting went wrong while processing your request",
        err,
      })
    );
  next();
};

module.exports = { upload, uploadImageOnCloud };
