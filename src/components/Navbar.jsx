import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>User Management</h2>

      <div>
        <Link style={styles.link} to="/">Register</Link>
        <Link style={styles.link} to="/admin">Admin Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#222",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontSize: "16px"
  }
};

export default Navbar;