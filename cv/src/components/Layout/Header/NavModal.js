import React from "react";
import ReactDOM from "react-dom";
import classes from "./NavModal.module.css";
import { NavLink } from "react-router-dom";
import IconClose from "../../UI/Icon/CloseIcon";
import IconWrapper from "../../UI/Icon/IconWrapper";

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
        <l1>
          <NavLink to="/" onClick={handleCloseModal}>
            About Me
          </NavLink>
        </l1>
        <l1>
          <NavLink to="/resume" onClick={handleCloseModal}>
            Resume
          </NavLink>
        </l1>
        <l1>
          <NavLink to="/blog" onClick={handleCloseModal}>
            Blog
          </NavLink>
        </l1>
        <l1>
          <NavLink to="/contact" onClick={handleCloseModal}>
            Contact
          </NavLink>
        </l1>
      </ul>
    </div>,
    document.getElementById("modal")
  );
}
