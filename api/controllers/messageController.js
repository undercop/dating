import Message from "../models/Message.js";
import { getIO , getConnectedUsers} from "../socket/socket.server.js";
export const sendMessage = async (req , res) =>{

    try {
        const {content , receiverId} = req.body;

        const newMessage = await Message.create({
            sender: req.user.id,
            receiver: receiverId,
            content
        })

        // to do with socket too
        const io = getIO();
        const connectedUsers = getConnectedUsers();
        const receiverSocketId = connectedUsers.get(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", {
                message: newMessage,
            });
        }



        res.status(200).json({
            success: true,
            message: "Message sent successfully",
            message: newMessage
        })  
    } catch (error) {
        
        console.log("Error in sending message controller:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        })
    }

}

export const getConversation = async ( req , res) =>{
   try {
        const {userId} = req.params;
        const messages = await Message.find({
            $or: [{sender: req.user.id, receiver: userId}, {sender: userId, receiver: req.user.id}]
        }).sort({createdAt: "asc"});

        res.status(200).json({
            success: true,
            messages
        })  
    } catch (error) {
        
        console.log("Error in getting conversation controller:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        })
    }
     
}