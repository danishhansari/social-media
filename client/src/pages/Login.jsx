import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
const Login = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <Box>
        <Box
          width={isNonMobileScreen ? "50% " : "90%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Welcome to Social Media, the social media for absolute everyone
          </Typography>
          <Form />
        </Box>
      </Box>
    </>
  );
};

export default Login;
