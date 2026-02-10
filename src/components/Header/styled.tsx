"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { styled } from "@mui/material/styles";

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
