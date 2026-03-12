import React, { useState } from "react";

function Register() {

  const [user,setUser] = useState({
    name:"",
    gender:"",
    email:"",
    password:"",
    contact:""
  });

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users",JSON.stringify(users));

    alert("User Registered Successfully");

    setUser({
      name:"",
      gender:"",
      email:"",
      password:"",
      contact:""
    });
  };

  return (
    <div style={styles.container}>

      <h2>User Registration</h2>

      <form style={styles.form} onSubmit={handleSubmit}>

        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <select
          style={styles.input}
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <input
          style={styles.input}
          type="text"
          name="contact"
          placeholder="Enter Contact"
          value={user.contact}
          onChange={handleChange}
          required
        />

        <button style={styles.button}>Register</button>

      </form>

    </div>
  );
}

const styles = {
  container:{
    width:"350px",
    margin:"40px auto",
    padding:"30px",
    border:"1px solid #ccc",
    borderRadius:"10px",
    textAlign:"center",
    boxShadow:"0 0 10px rgba(0,0,0,0.1)"
  },
  form:{
    display:"flex",
    flexDirection:"column"
  },
  input:{
    margin:"10px 0",
    padding:"10px",
    fontSize:"14px"
  },
  button:{
    padding:"10px",
    background:"#007bff",
    color:"white",
    border:"none",
    cursor:"pointer"
  }
};

export default Register;