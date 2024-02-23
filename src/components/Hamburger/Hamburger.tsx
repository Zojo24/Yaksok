import { useState } from "react";
import "./hamburger.css";

interface HamburgerProps {
  onClick: () => void;
}

const Hamburger = ({ onClick }: HamburgerProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };
  return (
    <button
      className={`hamburger ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <span className="menu-1"></span>
      <span className="menu-2"></span>
      <span className="menu-3"></span>
    </button>
  );
};
export default Hamburger;
