import express from "express";

import {getFriends,messageUploadDB,messageGet,ImageMessageSend,messageSeen,delivaredMessage,deleteMineMessage,deleteBothMsg} from '../controller/messengerController.js';
const router=express.Router();
import { authMiddleware }  from '../middleware/authMiddleware.js';

router.get('/get-friends', getFriends);
router.post('/send-message', messageUploadDB);
router.get('/get-message/:id', messageGet);
router.post('/image-message-send', ImageMessageSend);

router.post('/seen-message', messageSeen);
router.post('/delivared-message', delivaredMessage);
router.post('/delete-mine-msg', deleteMineMessage);
router.post('/delete-both-msg', deleteBothMsg);
 

// module.exports = router;
export default router;