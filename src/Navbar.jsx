import React from "react";
import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/home">
        <div>Home</div>
      </Link>
      <div onClick={() => navigate("/contact")}>Contact</div>
      <div onClick={() => navigate("/members")}>Members</div>
    </div>
  );
};
export default Navbar;
