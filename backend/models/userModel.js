const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const validateUrl = (val) => {
  urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
};

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    phone_number: {
      type: String,
      match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/,
    },
    profile_image: {
      type: String,
      validate: validateUrl,
      default:
        "https://th.bing.com/th/id/OIP.fiaJNeoSG28jikYUpCkE-QHaH2?pid=ImgDet&w=528&h=560&rs=1",
    },
    description: {
      type: String,
      maxLength: 300,
    },
    interests: {
      type: [String],
      default: [],
    },
    // linkedin_profile_link: {
    //   type: String,
    //   unique: true,
    //   validate: validateUrl,
    // },
    // github_profile_link: {
    //   type: String,
    //   unique: true,
    //   validate: validateUrl,
    // },
    // facebook_profile_link: {
    //   type: String,
    //   unique: true,
    //   validate: validateUrl,
    // },
    // twitter_profile_link: {
    //   type: String,
    //   unique: true,
    //   validate: validateUrl,
    // },
    // instagram_profile_link: {
    //   type: String,
    //   unique: true,
    //   validate: validateUrl,
    // },
    // website_profile_link: {
    //   type: String,
    //   unique: true,
    //   validate: validateUrl,
    // },
    education: {
      type: String,
      enum: {
        values: [
          "Primary",
          "Secondary",
          "Higher Secondary",
          "Graduation",
          "Post Graduation",
        ],
        message: "{VALUE} is not supported",
      },
      default: "Graduation",
    },
    role: {
      type: String,
      enum: {
        values: [
          "Schooling",
          "College Student",
          "Job",
          "Teaching",
          "Freelancing",
        ],
        message: "{VALUE} is not supported",
      },
      default: "College Student",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (
  enteredPassword,
  userPassword
) {
  return await bcrypt.compare(enteredPassword, userPassword);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  console.log(this.password);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
