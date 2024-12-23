// const express = require('express');
import express from "express";
const app = express();
app.use(cookieParser());
import dotenv from 'dotenv';
import cors from 'cors';  // Import the cors package

import databaseConnect from './config/database.js'
import authRouter from './routes/authRoute.js'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import messengerRoute from './routes/messengerRoute.js';



dotenv.config({
     path : 'backend/config/config.env'
})

app.use(cors({
     origin: ['http://localhost:3000', 'https://poetic-lamington-0c32de.netlify.app','https://pmgchat.netlify.app/'], // Allow specific origins
     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
     credentials: true, // Allow cookies if needed
 }));


app.use(bodyParser.json());

app.use('/api/messenger',authRouter);  //here authRouter is file name where remaining url may present therefore using app.use here.
app.use('/api/messenger',messengerRoute);



const PORT = process.env.PORT || 4000
app.get('/', (req, res)=>{
     res.send('This is from backend Sever')
})

databaseConnect();

app.listen(PORT, ()=>{
     console.log(`Server is running on port ${PORT}`)
})