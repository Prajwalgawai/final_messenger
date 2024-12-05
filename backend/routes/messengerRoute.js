import express from "express";

import {getFriends,messageUploadDB,messageGet,ImageMessageSend,messageSeen,delivaredMessage,deleteMineMessage,deleteBothMsg} from '../controller/messengerController.js';
const router=express.Router();
import { authMiddleware }  from '../middleware/authMiddleware.js';

router.get('/get-friends', getFriends);//note: I have removed middleware authMiddleware from here and need to add back
router.post('/send-message', messageUploadDB);//note: I have removed middleware authMiddleware from here and need to add back
router.get('/get-message/:id', messageGet);//note: I have removed middleware authMiddleware from here and need to add back
router.post('/image-message-send', ImageMessageSend);//note: I have removed middleware authMiddleware from here and need to add back

router.post('/seen-message', messageSeen); //note: I have removed middleware authMiddleware from here and need to add back
router.post('/delivared-message', delivaredMessage);//note: I have removed middleware authMiddleware from here and need to add back 
router.post('/delete-mine-msg', deleteMineMessage);//note: I have removed middleware authMiddleware from here and need to add back
router.post('/delete-both-msg', deleteBothMsg);//note: I have removed middleware authMiddleware from here and need to add back
 

// module.exports = router;
export default router;