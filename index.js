import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js";
import usersRoute from "./api/routes/users.js";
import hotelsRoute from "./api/routes/hotels.js";
import roomsRoute from "./api/routes/rooms.js";

const app = express();

// connet to mongodb
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDD");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

app.use(express.json());

// middleward
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((req, res, nexr) => {
  console.log("hi im a middleware");
});
// mongoose.connection.on("connected", () => {
//   console.log("mongoDB connected");
// });

// app.get("/", (req, res) => {
//   res.send("hello first request");
// });

app.listen(8800, () => {
  connect();
  console.log("Connetct to bboking app hallo");
});
