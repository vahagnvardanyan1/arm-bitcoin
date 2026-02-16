"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export const FormCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  marginInline: "auto",
  padding: theme.spacing(4),
  border: "1px solid",
  borderColor: theme.palette.divider,
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(3),
}));

export const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const EstimateBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(var(--mui-palette-primary-mainChannel) / 0.08)",
  marginBottom: theme.spacing(2),
}));

export const EstimateLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: 4,
}));

export const EstimateValue = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontVariantNumeric: "tabular-nums",
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  paddingTop: 12,
  paddingBottom: 12,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: "#fff",
  "&:hover": {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  },
  "&.Mui-disabled": {
    background: theme.palette.action.disabledBackground,
  },
}));
