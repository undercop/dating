import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema({

    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content:{
        type: String,
        required: true
    }// created at and updated at fields get added
},{timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export default Message;