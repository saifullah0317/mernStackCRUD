import User from "../schema/usersSchema.js";

export const adduser=async (req,res)=>{
    const user=req.body;
    const newUser=new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(409).json({message:err.message});
    }
}

export const users=async (req,res)=>{
    try{
        const user=await User.find({});
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message:err.message});
    }
}

export const loadUser=async (req,res)=>{
    try{
        const user=await User.find({_id:req.params.id});
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message:err.message});
    }
}

export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
