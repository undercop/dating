import User from '../models/User.js';


export const swipeRight = async (req, res)=>{
    try {
        const {likedUserId} = req.params;
        const user = await User.findById(req.user.id);
        const likedUser = await User.findById(likedUserId);


        if(!likesUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        if(!currentUser.likes.includes(likedUser.id)){
            currentUser.likes.push(likedUser.id);
        await currentUser.save();
    
// if the other user alreayd liked us then its a match 

        if(likedUser.likes.includes(currentUser.id)){
            currentUser.matches.push(likedUser.id);
            likedUser.matches.push(currentUser.id);
            awaitPromise.all([ await likedUser.save(),   await currentUser.save()])
            // too send notification if it is a match => societ.io
        }


        
    }
    
    res.status(200).json({
            success: true,
            user: currentUser,
        }
    
    )
 }catch (error) {
        console.log("error in swiperight").json({
            success:false,
            message: "Server Error"
        })
    }
}
export const swipeLeft = async (req, res)=>{
    try {
        const {dislikedUserId} = req.params
        currentUser = await User.findById(req.user.id);
if(!currentUser.dislikes.includes(dislikedUserId)){

    
    currentUser.dislikes.push(dislikedUserId); //
    await currentUser.save();
}

        res.status(200).json({
            success: true,
            message: "User disliked successfully"
        })

    } catch (error) {
        console.log("error swiping left", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}
export const getMatches= async (req, res)=>{

    try {
        const user = await User.findById(req.user.id).populate("matche", "name image" )

        res.status(200).json({
            success:true,
            matches: user.matches
        })
    } catch (error) {

        console.log("Error in getting matches", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        })
        
    }
}
export const getUserProfiles = async (req, res)=>{

    // we will be needing a lot of filters for it 
    // like i dont wanna se my own image in the users
    // i dont wanna see the users i have already liked again 
    // i dont wanna see the users i have already disliked again
    // i dont wanna see the users i have already matched with
   // i only wanna see my prefererd gender


   try {
     const users = await User.find({
        $and:[
            
            {_id: {$ne: currentUser.id}},
            {_id: {$nin: currentUser.likes}},
            {_id: {$nin: currentUser.dislikes}},
            {_id: {$nin: currentUser.matches}},
            {
                gender: currentUser.genderPreference === "both"?{ $in:["male" , "female"]}
                :currentUser.genderPreference,
            },
            {
                genderPreference: {$in: [currentUser.gender, "both"]}
            }
        ],
    });
    

    res.status(200).json({
        success: true,
        users,
    }) 
    } catch (error) {

        console.log("Error in getting user profiles", error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        })
               
    }
        }
    
