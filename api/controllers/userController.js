import cloudinary from "../config/cloudinary.js";
import User from "../models/User.js";

export const updateProfile = async (req, res) =>{

    // image => cloudinary -> imagage.cloudinary.your image 
    // we take user ki image then we will upload it to our own cloudinary server and then use that to provide us the link to the image so it may be stored in the databsase


    
try {
    const {image , ...otherdata} = req.body;
    let updatedData = otherdata

    if(image){
      // base 64 format

      if(image.startsWith("data:image"))
       try{
    const uploadRespose = await cloudinary. uploader.upload(image);
    updatedData.image = uploadRespose.secure_url;
       }catch(e){
       console.log("error uploading image");
        return res.status(400).json({
            success: false,
            message: "Failed to upload image",
        })


}
    }

    const updatedUser = await User.findByIdAndUpdate(req.user._id , updatedData , {new: true});

    res.status(200).json({
        success: true,
        user: updatedUser,
    })
} catch (error) {
   
    console.log("Error in update profile controller:", error);
    res.status(500).json({
        success: false,
        message: "Server Error",
    })
    
}}
     
