import React from "react";
import { useState,useEffect } from "react";
import {  editUser, loadUser } from "../service/api";
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUsers() {
  const onValueChange=(e)=>{
    setUser({...selectedUser, [e.target.name]: e.target.value})
  }
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(()=>{
    loadUserDetails();
  },[]);
  const [selectedUser,setUser]=useState({});
  const loadUserDetails=async ()=>{
    const response=await loadUser(id);
    setUser(response.data[0]);
  };
  const onButtonClick=async ()=>{
    await editUser(id,selectedUser);
    navigate('/users');
  }

  return (
    <>
      <div className="container" style={{width:"50%",margin:"20px auto"}}>
        <label htmlFor="inputPassword5" className="form-label" style={{margin:"10px 0",fontSize:"20px"}}>
          Full name
        </label>
        <input
          type="text"
          // placeholder="Enter you name here"
          className="form-control"
          id="fullName1"
          value={selectedUser.name}
          onChange={(e)=>onValueChange(e)}
          aria-describedby="passwordHelpBlock"
          name="name"
          // onChange={(e)=>onValueChange(e)}
        />
        <label htmlFor="inputPassword5" className="form-label" style={{margin:"10px 0",fontSize:"20px"}}>
          Username
        </label>
        <input
          type="text"
          // placeholder="Enter user-name"
          className="form-control"
          id="userName1"
          value={selectedUser.username}
          onChange={(e)=>onValueChange(e)}
          aria-describedby="passwordHelpBlock"
          name="username"
          // onChange={(e)=>onValueChange(e)}
        />
        <label htmlFor="inputPassword5" className="form-label" style={{margin:"10px 0",fontSize:"20px"}}>
          Email
        </label>
        <input
          type="email"
          // placeholder="Enter your email"
          className="form-control"
          id="userEmail1"
          value={selectedUser.email}
          onChange={(e)=>onValueChange(e)}
          aria-describedby="passwordHelpBlock"
          name="email"
          // onChange={(e)=>onValueChange(e)}
        />
        <label htmlFor="inputPassword5" className="form-label" style={{margin:"10px 0",fontSize:"20px"}}>
          Phone
        </label>
        <input
          type="text"
          // placeholder="Enter your contact number"
          className="form-control"
          id="userPhone1"
          value={selectedUser.phone}
          contenteditable='fasle'
          onChange={(e)=>onValueChange(e)}
          aria-describedby="passwordHelpBlock"
          name="phone"
          // onChange={(e)=>onValueChange(e)}
        />
        <div className="d-grid gap-2 col-3 mx-auto">
        <button type="button" className="btn btn-outline-dark btn-lg" onClick={async()=>{await onButtonClick()}} style={{margin:"30px 0",borderRadius:"30px"}}>Edit User</button>
        </div>
      </div>
    </>
  );
}
