"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const DashboardTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(1),
  opacity: 0,
  transform: "translateY(24px)",
  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

export const LastUpdated = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  opacity: 0,
  transform: "translateY(16px)",
  transition: "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

export const AnimatedCardWrapper = styled(Grid)<{ index: number }>(
  ({ index }) => ({
    opacity: 0,
    transform: "translateY(32px) scale(0.95)",
    transition: `opacity 0.5s ease-out ${0.2 + index * 0.1}s, transform 0.5s ease-out ${0.2 + index * 0.1}s`,
    "&.visible": {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
  }),
);

export const CardsContainer = styled(Box)({
  width: "100%",
});
