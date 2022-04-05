import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/home")}>Home</div>
      <div onClick={() => navigate("/contact")}>Contact</div>
      <div onClick={() => navigate("/members")}>Members</div>
    </div>
  );
};
export default Navbar;
