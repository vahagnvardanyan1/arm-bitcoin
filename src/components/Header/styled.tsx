"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiIconButton from "@mui/material/IconButton";
import MuiLink from "@mui/material/Link";
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
});

export const LogoImage = styled("img")({
  width: 36,
  height: 36,
  borderRadius: "50%",
  objectFit: "cover",
});

export const TitleText = styled(Typography)({
  fontWeight: 700,
  letterSpacing: "-0.01em",
});

export const NavBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: theme.spacing(3),
  marginLeft: "auto",
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const NavLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
  transition: "color 0.2s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const ActionsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  [theme.breakpoints.up("md")]: {
    marginLeft: 0,
  },
  marginLeft: "auto",
}));

export const ThemeToggleButton = styled(MuiIconButton)({
  color: "var(--mui-palette-text-secondary)",
  "&:hover": {
    color: "var(--mui-palette-text-primary)",
  },
});

export const MenuButton = styled(MuiIconButton)(({ theme }) => ({
  display: "inline-flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

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
