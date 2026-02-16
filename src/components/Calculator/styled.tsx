"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export const CalcWrapper = styled(Box)({
  width: "100%",
});

export const CalcCard = styled(Card)(({ theme }) => ({
  maxWidth: 680,
  marginInline: "auto",
  padding: theme.spacing(4),
  border: "1px solid",
  borderColor: theme.palette.divider,
  opacity: 0,
  transform: "translateY(40px) scale(0.97)",
  transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0) scale(1)",
  },
}));

export const CalcTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(3),
  opacity: 0,
  transform: "translateY(16px)",
  transition: "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

export const CalcRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  opacity: 0,
  transform: "translateY(16px)",
  transition: "opacity 0.5s ease-out 0.35s, transform 0.5s ease-out 0.35s",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

export const CalcAmountField = styled(TextField)({
  flex: 1,
  opacity: 0,
  transform: "translateY(16px)",
  transition: "opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const CalcField = styled(TextField)({
  flex: 1,
});

export const ResultBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(var(--mui-palette-primary-mainChannel) / 0.08)",
  marginTop: theme.spacing(2),
  opacity: 0,
  transform: "translateY(16px)",
  transition: "opacity 0.5s ease-out 0.55s, transform 0.5s ease-out 0.55s",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

export const ResultLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: 4,
}));

export const ResultValue = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontVariantNumeric: "tabular-nums",
}));

export const FeeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: 4,
}));
