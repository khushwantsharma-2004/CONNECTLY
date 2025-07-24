
import express from "express";
import mongoose from "mongoose";
import httpStatus from "http-status";
import cors from "cors";
import {createServer} from "node:http";
import { Server } from "socket.io";
import userRoutes from "./routes/user.routes.js";
import { connectToSocket } from "./controllers/socketManagers.js";
const app=express();
const server=createServer(app);
const io=connectToSocket(server);
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);


const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://dbUser:changeemail@cluster0.fni5j.mongodb.net/");
    console.log(`mongodb connected DB host: ${connectionDb.connection.host}`);
    server.listen(5173,()=>{
        console.log("listening on port 5173");
    });
};
start();
