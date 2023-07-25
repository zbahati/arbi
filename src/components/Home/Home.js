import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.scss";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <Box className="hero">
      <Box className="hero_text">
        <motion.div animate={{x: [-1000, 200,0]}} transition={{delay: 1.8}} className="hero_text_head">Give a little. Change a lot.</motion.div>
        <motion.div animate={{y: [-590, 0]}} transition={{delay: 2.2}} className="hero_text_desc">
          Help today because tomorrow you may be the one who needs helping!
          <br/>
          Forget what you can get and see what you can give.
        </motion.div>
      </Box>
    </Box>
  );
};

export default Homepage;
