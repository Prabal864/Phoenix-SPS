import { Typography } from "@mui/material";
import {Link} from "react-router-dom";

const Logo = () => {
    return <div style={{
        display:"flex",
        marginRight:"auto",
        alignItems:"center",
        gap:"8px",
    }}>
        <Link to={"/"}>
            <img src="phoenix.png" alt="chatbot logo" width={"110px"} height={"110px"} className="image-inverted"/> 
        </Link>
        <Typography sx={{display:{md:"block",sm:"none",xs:"none"},marginRight:"auto", fontWeight:"800",textShadow:"2px 2px 20px #000",}
        }><span style={{fontSize:"35px"}}>PHOENIX</span>-SPS
        </Typography>
    </div>
};

export default Logo;