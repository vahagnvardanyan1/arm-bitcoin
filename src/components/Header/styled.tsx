"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiIconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const StyledAppBar = styled(MuiAppBar)({
  backgroundColor: "rgba(var(--mui-palette-background-defaultChannel) / 0.7)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid",
  borderColor: "var(--mui-palette-divider)",
  color: "var(--mui-palette-text-primary)",
});

export const StyledToolbar = styled(MuiToolbar)(({ theme }) => ({
  maxWidth: 1200,
  width: "100%",
  marginInline: "auto",
  paddingInline: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    paddingInline: theme.spacing(3),
  },
}));

export const BrandBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  flexGrow: 1,
});

export const LogoBox = styled(Box)({
  width: 28,
  height: 28,
  borderRadius: "6px",
  background: "linear-gradient(135deg, #0070f3, #7928ca)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const LogoText = styled(Typography)({
  color: "white",
  fontWeight: 800,
  fontSize: 14,
  lineHeight: 1,
});

export const TitleText = styled(Typography)({
  fontWeight: 600,
  letterSpacing: "-0.01em",
});

export const ActionsBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 4,
});

export const ThemeToggleButton = styled(MuiIconButton)({
  color: "var(--mui-palette-text-secondary)",
  "&:hover": {
    color: "var(--mui-palette-text-primary)",
  },
});

export const LightIcon = styled(LightModeIcon)({
  display: "none",
  '[data-color-scheme="dark"] &': {
    display: "inline-flex",
  },
});

export const DarkIcon = styled(DarkModeIcon)({
  display: "none",
  '[data-color-scheme="light"] &': {
    display: "inline-flex",
  },
});
