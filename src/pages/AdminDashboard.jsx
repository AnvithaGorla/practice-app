import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const [users,setUsers] = useState([]);
  const [search,setSearch] = useState("");
  const [posts,setPosts] = useState([]);
  const [active,setActive] = useState("users");

  useEffect(()=>{
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  },[]);

  const deleteUser = (index)=>{

    const updatedUsers = users.filter((u,i)=> i !== index);

    setUsers(updatedUsers);

    localStorage.setItem("users",JSON.stringify(updatedUsers));
  };

  const fetchAPI = async()=>{

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    setPosts(data.slice(0,10));
  };

  const logout = ()=>{
    navigate("/admin");
  };

  const filteredUsers = users.filter((u)=>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div>

      {/* Top Navbar */}
      <div style={styles.navbar}>

        <h2>Admin Dashboard</h2>

        <div>

          <button
          style={styles.navBtn}
          onClick={()=>setActive("users")}
          >
          Users
          </button>

          <button
          style={styles.navBtn}
          onClick={()=>{
            setActive("api");
            fetchAPI();
          }}
          >
          API Data
          </button>

          <button
          style={styles.logoutBtn}
          onClick={logout}
          >
          Logout
          </button>

        </div>

      </div>


      <div style={styles.main}>

        {active==="users" && (

          <div>

            <h3>Registered Users</h3>

            <input
            style={styles.search}
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

            <table style={styles.table} border="1">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredUsers.map((u,index)=>(

                  <tr key={index}>
                    <td>{u.name}</td>
                    <td>{u.gender}</td>
                    <td>{u.email}</td>
                    <td>{u.contact}</td>

                    <td>
                      <button
                      style={styles.deleteBtn}
                      onClick={()=>deleteUser(index)}
                      >
                      Delete
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

        {active==="api" && (

          <div>

            <h3>Dummy API Data</h3>

            {posts.map((p)=>(
              <div key={p.id} style={styles.card}>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}

          </div>

        )}

      </div>

    </div>
  );
}

const styles = {

navbar:{
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  background:"#222",
  color:"white",
  padding:"15px"
},

navBtn:{
  marginRight:"10px",
  padding:"8px 12px",
  border:"none",
  cursor:"pointer"
},

logoutBtn:{
  background:"red",
  color:"white",
  padding:"8px 12px",
  border:"none",
  cursor:"pointer"
},

main:{
  padding:"30px",
  background:"#f3f4f6",
  minHeight:"90vh"
},

search:{
  padding:"8px",
  marginBottom:"15px",
  width:"250px"
},

table:{
  width:"100%",
  borderCollapse:"collapse",
  background:"white"
},

deleteBtn:{
  padding:"6px 10px",
  background:"red",
  color:"white",
  border:"none",
  cursor:"pointer"
},

card:{
  background:"white",
  padding:"15px",
  marginBottom:"10px",
  borderRadius:"5px",
  boxShadow:"0 2px 5px rgba(0,0,0,0.1)"
}

};

export default AdminDashboard;