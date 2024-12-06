import express from "express";

import {getFriends,messageUploadDB,messageGet,ImageMessageSend,messageSeen,delivaredMessage,deleteMineMessage,deleteBothMsg} from '../controller/messengerController.js';
const router=express.Router();
import { authMiddleware }  from '../middleware/authMiddleware.js';

router.get('/get-friends', getFriends);//note: I have removed middleware authMiddleware from here and need to add back
router.post('/send-message', authMiddleware,messageUploadDB);//note: I have removed middleware authMiddleware from here and need to add back
router.get('/get-message/:id', authMiddleware,messageGet);//note: I have removed middleware authMiddleware from here and need to add back
router.post('/image-message-send', authMiddleware,ImageMessageSend);//note: I have removed middleware authMiddleware from here and need to add back

router.post('/seen-message', authMiddleware,messageSeen); //note: I have removed middleware authMiddleware from here and need to add back
router.post('/delivared-message', authMiddleware,delivaredMessage);//note: I have removed middleware authMiddleware from here and need to add back 
router.post('/delete-mine-msg', authMiddleware,deleteMineMessage);//note: I have removed middleware authMiddleware from here and need to add back
router.post('/delete-both-msg', authMiddleware,deleteBothMsg);//note: I have removed middleware authMiddleware from here and need to add back

// npm install cookie-parser


// module.exports = router;
export default router;