import axios from "axios";
const url='http://localhost:8000';

export const addUser=async (data)=>{
    try{
        return await axios.post(`${url}/adduser`,data);
    }catch(err){
        console.log("Error while calling addUser API: ",err);
    }
}
export const getUser=async ()=>{
    try{
        return await axios.get(`${url}/users`);
    }catch(err){
        console.log("Error while calling getUser API: ",err);
    }
}
export const loadUser=async (id)=>{
    try{
        return await axios.get(`${url}/${id}`)
    }catch(err){
        console.log("Error while calling loadUser API: ",err);
    }
}
export const editUser=async (id,newUser)=>{
    try{
        return await axios.put(`${url}/${id}`,newUser);
    }catch(err){
        console.log("Error while calling editUser API: ",err);
    }
}
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}