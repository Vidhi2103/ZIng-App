import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor="#03045ea5"
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Zing
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        // backgroundColor={theme.palette.background.alt}
        backgroundColor="#03045ea5"
      >
        <Typography fontWeight="500" variant="h5" sx={{ color: "white", mb: "1.5rem" }}>
          Zing, Share your Spark!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;