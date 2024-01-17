import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuIcon from "../../UI/Icon/MenuIcon";
import IconWrapper from "../../UI/Icon/IconWrapper";
import NavModal from "./NavModal";

export default function NavLinks() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 991);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  function openModal() {
    setIsModalOpen(true);
  };

  function closeModal () {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavModal isOpen={isModalOpen} onClose={closeModal}/>
      <div className={classes.navLinksContainer}>
        {isMobile && (
          <>
            <IconWrapper
              color="#222"
              feedbackColor="#007bff"
              size={24}
              onClick={openModal}
              icon={<MenuIcon />}
            />
          </>
        )}
        {!isMobile && (
          <ul className={classes.navUl}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Resume
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Blog
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Contact
              </NavLink>
              </li>
          </ul>
        )}
      </div>
    </>
  );
}
