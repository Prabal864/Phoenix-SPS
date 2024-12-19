import { Box } from "@mui/material";
import { TypingAnim } from "../components/typer/TypingAnimation";
import { LandingWindow } from "../components/spline/Robot";

const Home = () => {
  return (
    <Box width="100%" height="100%" position="relative">
      {/* Landing Window */}
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <LandingWindow />
      </Box>

      {/* Typing Animation - Absolutely Positioned */}
      <Box
        sx={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10, // Ensure it's above the LandingWindow
          pointerEvents: "none", // Prevent interaction with TypingAnim
        }}
      >
        <TypingAnim />
      </Box>
    </Box>
  );
};

export default Home;
