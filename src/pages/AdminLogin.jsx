import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin(){

  const navigate = useNavigate();

  const [login,setLogin] = useState({
    username:"",
    password:""
  });

  const handleChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(login.username==="admin" && login.password==="admin"){
      navigate("/dashboard");
    }else{
      alert("Invalid Credentials");
    }
  };

  return(

    <div style={styles.container}>
      <h2>Admin Login</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input style={styles.input} type="text" name="username"placeholder="Username" onChange={handleChange} required
    />

        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button style={styles.button}>Login</button>

      </form>

    </div>
  );
}

const styles={
  container:{
    width:"300px",
    margin:"60px auto",
    padding:"30px",
    border:"1px solid #ccc",
    borderRadius:"10px",
    textAlign:"center"
  },
  form:{
    display:"flex",
    flexDirection:"column"
  },
  input:{
    margin:"10px 0",
    padding:"10px"
  },
  button:{
    padding:"10px",
    background:"green",
    color:"white",
    border:"none"
  }
};

export default AdminLogin;