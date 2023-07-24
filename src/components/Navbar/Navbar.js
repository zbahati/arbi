import { Link } from "react-router-dom";
import logo from "../../asset/picture/ARBI LOGO.png";
import "./Navbar.scss";
import ListIcon from '@mui/icons-material/List';
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="header">
      <nav>
        <motion.div animate={{x:[-300,100,0]}} transition={{delay: 1.5}} className="logo">
          <motion.img src={logo} alt="logo"  />
        </motion.div>
        <div className="links">
          <ul>
            <motion.li animate={{y: [-100,0]}} transition={{ delay: 0.2}}>
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li animate={{y: [-100,0]}} transition={{ delay: 0.4}}>
              <Link to="/about">About</Link>
            </motion.li>
            <motion.li animate={{y: [-100,0]}} transition={{ delay: 0.6}}>
              <Link to="/news">News</Link>
            </motion.li>
            <motion.li animate={{y: [-100,0]}} transition={{ delay: 0.8}}>
              <Link to="/testimonial">Testimonial</Link>
            </motion.li>
            <motion.li animate={{y: [-100,0]}} transition={{ delay: 1}}>
              <Link to="/gallery">Gallery</Link>
            </motion.li>
            <motion.li animate={{y: [-100,0]}} transition={{ delay: 1.2}}>
              <Link to="/contact">Contact</Link>
            </motion.li>
          </ul>
        </div>
        <div className="small">
          {openNav ? (
            <motion.ul animate={{x: [-400,50,0]}}
             className="mobileNavOpen"
            >
              <li className="closebtn">
                <button onClick={() => {setOpenNav(false)}}>&times;</button>
              </li>
              <motion.li animate={{x: [-300,0]}} transition={{delay: 0.2}} >
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li animate={{x: [-300,0]}} transition={{delay: 0.4}}>
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li animate={{x: [-300,0]}} transition={{delay: 0.6}}>
                <Link to="/news">News</Link>
              </motion.li>
              <motion.li animate={{x: [-300,0]}} transition={{delay: 0.8}}>
                <Link to="/testimonial">Testimonial</Link>
              </motion.li>
              <motion.li animate={{x: [-300,0]}} transition={{delay: 1}}>
                <Link to="/gallery">Gallery</Link>
              </motion.li>
              <motion.li animate={{x: [-300,0]}} transition={{delay: 1.2}}>
                <Link to="/contact">Contact</Link>
              </motion.li>
            </motion.ul>
          ) : (
            <div className="humbergerbtn">
              <button onClick={() => setOpenNav(true)}>
                <ListIcon color="primary" sx={{ fontSize: 50 }} />
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
