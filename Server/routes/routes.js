 import express from 'express';
 import { uploadImage,getImage } from '../Controller/uploadImage.js';
 import Uploadfile from '../utils/fileupload.js';
 ////////////////////////////////// backend ma .js extension compulsory xa front ma navayepani hunxa///////////////////// yed backend ma vayena vane tesle error falxa////

 const router = express.Router();

 router.post('/image', Uploadfile.single('file'), uploadImage);
 router.get('/file/:fileId', getImage);
 export default router;