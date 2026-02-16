"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "rgb(227, 171, 41)" },
        secondary: { main: "rgb(66, 2, 112)" },
        background: {
          default: "#F5F5F5",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#171717",
          secondary: "#666666",
        },
        divider: "rgba(0,0,0,0.08)",
      },
    },
    dark: {
      palette: {
        primary: { main: "rgb(227, 171, 41)" },
        secondary: { main: "rgb(66, 2, 112)" },
        background: {
          default: "#0E131B",
          paper: "#161C27",
        },
        text: {
          primary: "#ededed",
          secondary: "#888888",
        },
        divider: "rgba(255,255,255,0.08)",
      },
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: { fontWeight: 800, letterSpacing: "-0.04em" },
    h2: { fontWeight: 700, letterSpacing: "-0.03em" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h5: { fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
