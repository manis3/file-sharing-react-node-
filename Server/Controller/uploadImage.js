import express from 'express';
import File from '../models/file.js';

export const uploadImage = async(req,res) => {
    // console.log(req);
    const fileobj = {
        path: req.file.path,
        name: req.file.originalname,
    }
 try{
    const file  = await File.create(fileobj)
    console.log(file)
    res.status(200).json({ path: `http://localhost:${process.env.PORT}/upload/file/${file._id}`});



 }
 catch(error)
 {
    console.error(error.message);
    res.status(500).json({err:error.message});
 }

}




    // Note:////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// different between req.query and req.params

// let take an example url = https://search.brave.com/images?q=image&source=web

// if there is any that is append with url using ? then it is accessed using req.query

// and if the url = https://localhost.brave.com/asf54sf54sf564

// variable that is append in url after the / is called params 
// and is accessed using "req.params"

export const getImage = async (req,res) => {
    console.log("upload image",req.params.fileId)
    try {   
        
        const file = await File.findById(req.params.fileId);
        console.log("file download",file)
        
        file.downloadCount++;

        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
}