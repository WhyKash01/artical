"use client"
import Axios from "axios"
import React, { useState } from "react";
import InputField from "./InputField";
import Link from "next/link"
const SignInContent = () => {
  const [firstName, setfirstName]= useState("")
  const [LastName, setLastName]= useState("")
  const [userName, setuserName]= useState("")
  const [password, setpassword]= useState("")
  const  [err, seterr]=useState(false);
  return (
    <div className="my-5 ">
      <h1 className="text-3xl text-center  font-bold"> Sign Up</h1>
      <h3 className="my-2 opacity-80 text-lg  text-center">
        Enter your information to Sign Up your account{" "}
      </h3>
      <InputField onChange={(e:any)=>{
        setfirstName(e.target.value)
      }} title={"First Name"} placeholder={"John"} />
      <InputField onChange={(e:any)=>{
        setLastName(e.target.value)
      }} title={"Last Name"} placeholder={"Doe"} />
      <InputField onChange={(e:any)=>{
        setuserName(e.target.value)
      }} title={"Email"} placeholder={"xyz@gmail.com"} />
      <InputField onChange={(e:any)=>{
        setpassword(e.target.value)
      }} title={"Password"} placeholder={"123456"} />
      <button type="submit" onClick={async()=>{
        
        try {
          Axios.post("http://localhost:3000/api/users",{
          
            username: userName,
            password,
            name: firstName+LastName
          
        })
        
        alert("you are logged in")
        } catch (error) {
          alert("logged in fail")
        }
        
        // localStorage.setItem("token", response.data.token);

      }} className="bg-slate-950 border border-zinc-900 mt-5 py-2 rounded-md text-white w-[100%] ">
        Sign Up
      </button>
      <h3>{err?"alreadytaken":""}</h3>
      <h3 className="mt-3 text-zinc-500 dark:text-zinc-100 text-lg  text-center">Already have an accout? <Link className="underline ml-1" href={"login"}>Login</Link></h3>
    </div>
  );
};

export default SignInContent;
