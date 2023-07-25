import { Box } from "@mui/material";
import "./About.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HomeAbout = () => {
  const percentage = 90;
  return (
    <Box>
      <div className="achievement">
        <div className="charts">

          <div className="chart" >
            <CircularProgressbar value={percentage} text={`${percentage}%`} className="circular" />
            <p>
            People around the world expose to the message of healing and reconciliation
            </p>
          </div>
          <div className="chart" >
            <CircularProgressbar value={percentage} text={`${percentage}%`} className="circular" />
            <p>
            People around the world expose to the message of healing and reconciliation
            </p>
          </div>
          <div className="chart" >
            <CircularProgressbar value={percentage} text={`${percentage}%`} className="circular" />
            <p>
            People around the world expose to the message of healing and reconciliation
            </p>
          </div>

        </div>
      </div>
    </Box>
  );
};

export default HomeAbout;
