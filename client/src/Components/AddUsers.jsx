import React from "react";
// import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from 'react-router-dom';

export default function AddUsers() {
  // const onValueChange=(e)=>{
  //   console.log(e.target.name,e.target.value);
  // }

  const navigate=useNavigate();
  const defaultUser={
    name:"",
    username:"",
    email:"",
    phone:""
  }
  const onButtonClick=async ()=>{
    defaultUser.name=document.getElementById("fullName").value;
    defaultUser.username=document.getElementById("userName").value;
    defaultUser.email=document.getElementById("userEmail").value;
    defaultUser.phone=document.getElementById("userPhone").value;
    await addUser(defaultUser);
    navigate('/users');
  }
  // const [newUser,setUser]=useState(defaultUser);

  return (
    <>
      <div className="container" style={{width:"50%",margin:"20px auto"}}>
        <label htmlFor="inputPassword5" className="form-label" style={{margin:"10px 0",fontSize:"20px"}}>
          Full name
        </label>
        <input
          type="text"
          placeholder="Enter you name here"
          className="form-control"
          id="fullName"
          aria-describedby="passwordHelpBlock"
          // name="name"
          // onChange={(e)=>onValueChange(e)}
        />
        <label htmlFor="inputPassword5" className="form-label" style={{margin:"10px 0",fontSize:"20px"}}>
          Username
        </label>
        <input
          type="text"
          placeholder="Enter user-name"
          className="form-control"
          id="userName"
          aria-describedby="passwordHelpBlock"
          // name="username"
          // onChange={(e)=>onValueChange(e)}
        />
        <label htmlFor="inputPassword5" className="form-label" style={{margin:"10px 0",fontSize:"20px"}}>
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control"
          id="userEmail"
          aria-describedby="passwordHelpBlock"
          // name="email"
          // onChange={(e)=>onValueChange(e)}
        />
        <label htmlFor="inputPassword5" className="form-label" style={{margin:"10px 0",fontSize:"20px"}}>
          Phone
        </label>
        <input
          type="text"
          placeholder="Enter your contact number"
          className="form-control"
          id="userPhone"
          aria-describedby="passwordHelpBlock"
          // name="phone"
          // onChange={(e)=>onValueChange(e)}
        />
        <div className="d-grid gap-2 col-3 mx-auto">
        <button type="button" className="btn btn-outline-dark btn-lg" onClick={()=>onButtonClick()} style={{margin:"30px 0",borderRadius:"30px"}}>Add User</button>
        </div>
      </div>
    </>
  );
}
