import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUser } from "../service/api";

export default function Users() { 

    const navigate=useNavigate();
    const toEdit=(id)=>{
      navigate(`/edituser/${id}`);
      // alert("checking")
    }
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers=async()=>{
        let response=await getUser();
        setUsers(response.data);
    }
    const deleteUserDetails=async (id)=>{
      await deleteUser(id);
      getAllUsers();
    }
    
  return (
    <>
      <table style={{width:'90%',margin:'50px auto 0 auto'}} className="table table-light table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user)=>{
              return(
              <tr>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button type="button" className="btn btn-outline-primary btn-sm" style={{margin:'1px 5px'}} onClick={()=>toEdit(user._id)}>Edit</button>
                  <button className="btn btn-outline-danger btn-sm" onClick={async()=>{await deleteUserDetails(user._id)}}>Delete</button>
                </td>
              </tr>);
            })
          }
        </tbody>
      </table>
    </>
  );
}
