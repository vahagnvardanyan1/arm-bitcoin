"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#0070f3" },
        secondary: { main: "#7928ca" },
        background: {
          default: "#ffffff",
          paper: "#fafafa",
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
        primary: { main: "#0070f3" },
        secondary: { main: "#7928ca" },
        background: {
          default: "#0a0a0a",
          paper: "#111111",
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
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
