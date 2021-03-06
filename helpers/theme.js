import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ed592f",
    },
  },
  typography: {
    h1: {
      fontSize: "3.7rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.9rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.15rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.15rem",
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      lineHeight: 1.33,
    },
    subtitle2: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: ".7rem",
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    overline: {
      fontSize: ".7rem",
      letterSpacing: 0,
      textTransform: "uppercase",
      lineHeight: 1,
      marginBottom: 8,
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        subtitle1: "p",
        subtitle2: "p",
        caption: "p",
        overline: "p",
      },
    },
  },
});

const themeWithResponsiveFontSizes = responsiveFontSizes(theme);

export default themeWithResponsiveFontSizes;
