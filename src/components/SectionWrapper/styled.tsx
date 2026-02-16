"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SectionRoot = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));
