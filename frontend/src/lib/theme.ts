import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5ACCCC", // Turquoise
    },
    secondary: {
      main: "#335C6E", // Steel Blue
    },
    error: {
      main: "#F76434", // Orange Red
    },
    warning: {
      main: "#FABD33", // Yellow
    },
    info: {
      main: "#4AA088", // Teal
    },
    success: {
      main: "#28B8B8", // Turquoise Dark 2
    },
    background: {
      default: "#FFFFFF", // White
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

export default theme;
