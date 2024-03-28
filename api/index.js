const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const PostModel = require("./models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const FriendModel = require("./models/Friend");
const StoryModel = require("./models/Story");
require("dotenv").config();

const app = express();
const port = 8080;
const secret = "afafrerfsd934erfn3432424";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

const mongoURI = process.env.MONGO_CONNECT_DB;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

app.get("/friends", async (req, res) => {
  try {
    const friend = await FriendModel.find();
    res.status(200).json({ data: friend });
  } catch (error) {
    res.status(404).json({ messages: "Not found friends" });
  }
});

app.get("/stories", async (req, res) => {
  try {
    const story = await StoryModel.find();
    res.status(200).json({ data: story });
  } catch (error) {
    res.status(404).json({ messages: "Not found story" });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const post = await PostModel.find();
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(404).json({ messages: "Not found post" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      username: username,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ data: user, message: "Registration successfully completed" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the registration",
      error: error.message,
    });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  try {
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      jwt.sign({ username, id: user._id }, secret, {}, (err, token) => {
        if (err) {
          return res.status(500).json({
            message: "Error signing token",
            error: err.message,
          });
        }
        res.cookie("token", token).json({
          username,
          id: user._id,
        });
      });
    } else {
      res.status(400).json({
        message: "Password does not match",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});

// app.get("/profile", (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   jwt.verify(token, secret, (err, info) => {
//     if (err) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     res.status(200).json({ info });
//   });
// });

// app.post("/logout", (req, res) => {
//   res.cookie("token", "").json("ok");
// });

// app.get("/create", async (req, res) => {
//   const post = await PostModel.find()
//     .populate("author", ["username"])
//     .sort({ createdAt: -1 })
//     .limit(10);
//   res.json(post);
// });

// app.get("/create/:id", async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const post = await PostModel.findOne({ _id: postId });
//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     res.json(post);
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching the post" });
//   }
// });

// app.post("/create", async (req, res, next) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const { originalname, path } = req.file;
//     const part = originalname.split(".");
//     const ext = part[part.length - 1];
//     const newPath = path + "." + ext;
//     fs.renameSync(path, newPath);

//     const token = req.cookies.token;
//     jwt.verify(token, secret, (err, info) => {
//       if (err) {
//         return res.status(401).json({ message: "Unauthorized" });
//       }

//       const { title, summary, description } = req.body;
//       const postData = {
//         title: title,
//         summary: summary,
//         description: description,
//         cover: newPath,
//         author: info.id,
//       };

//       PostModel.create(postData)
//         .then((post) => {
//           res.status(200).json(post);
//         })
//         .catch((err) => {
//           let errorMessage = "An error occurred while creating the post";

//           if (err.message) {
//             errorMessage = err.message;
//           } else if (err.errors) {
//             for (const key in err.errors) {
//               if (err.errors.hasOwnProperty(key)) {
//                 errorMessage = err.errors[key].message;
//                 break;
//               }
//             }
//           }

//           return res.status(500).json({ error: errorMessage });
//         });
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.put("/create", async (req, res) => {
//   let newPath = null;
//   if (req.file) {
//     const { originalname, path } = req.file;
//     const part = originalname.split(".");
//     const ext = part[part.length - 1];
//     newPath = path + "." + ext;
//     fs.renameSync(path, newPath);
//   }

//   const token = req.cookies.token;

//   jwt.verify(token, secret, async (err, info) => {
//     if (err) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const { id, title, summary, description } = req.body;
//     const post = await PostModel.findById(id);
//     const isAuthor = JSON.stringify(post?.author) === JSON.stringify(info?.id);

//     if (!isAuthor) {
//       return res.status(401).json({ message: "You are not author" });
//     }

//     await PostModel.findByIdAndUpdate(id, {
//       title,
//       summary,
//       description: description,
//       cover: newPath ? newPath : post.cover,
//     });

//     const updatedPost = await PostModel.findById(id);
//     res.json(updatedPost);
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
