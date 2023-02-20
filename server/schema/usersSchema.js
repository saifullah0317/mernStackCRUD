import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const usersSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
});
autoIncrement.initialize(mongoose.connection);
usersSchema.plugin(autoIncrement.plugin,'User');

const User=mongoose.model('User',usersSchema);
export default User;