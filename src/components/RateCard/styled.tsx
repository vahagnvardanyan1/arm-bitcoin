"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const CardRoot = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  border: "1px solid",
  borderColor: theme.palette.divider,
  background: theme.palette.background.paper,
}));

export const CardHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8,
});

export const CardLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
}));

export const CardValue = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  fontVariantNumeric: "tabular-nums",
}));

export const SkeletonValue = styled(Skeleton)({
  width: "70%",
  height: 32,
});

export const LiveDot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: theme.palette.success?.main ?? "#4caf50",
  animation: "pulseGlow 2s ease-in-out infinite",
}));
