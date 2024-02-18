import React from "react";
import ReactDOM from "react-dom";
import classes from "./NavModal.module.css";
import { NavLink } from "react-router-dom";
import IconClose from "../../UI/Icon/CloseIcon";
import IconWrapper from "../../UI/Icon/IconWrapper";
import { resume } from "../../../resume/resume";

export default function NavModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  function handleCloseModal() {
    onClose();
  }

  return ReactDOM.createPortal(
    <div className={classes.modalOverlay}>
      <div className={classes.closeIcon}>
        <IconWrapper
          color="#222"
          feedbackColor="#007bff"
          size={25}
          onClick={handleCloseModal}
          icon={<IconClose />}
        />
      </div>
      <ul className={classes.navLinks}>
        <li>
          <NavLink to="/" onClick={handleCloseModal}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" onClick={handleCloseModal}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to={resume.profiles["Blog"].link} target="_blank" onClick={handleCloseModal}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleCloseModal}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>,
    document.getElementById("modal")
  );
}
