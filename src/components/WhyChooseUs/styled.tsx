"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const WhyTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
  fontWeight: 800,
}));

export const WhySubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: "var(--mui-palette-text-secondary)",
  maxWidth: 560,
  marginInline: "auto",
  lineHeight: 1.6,
}));

export const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  textAlign: "center",
  border: "1px solid",
  borderColor: "var(--mui-palette-divider)",
  position: "relative",
  overflow: "hidden",
  transition:
    "transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.35s",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    background:
      "linear-gradient(135deg, rgba(227,171,41,0.06), rgba(66,2,112,0.04))",
    opacity: 0,
    transition: "opacity 0.35s",
  },
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 20px 40px -12px rgba(66,2,112,0.15)",
    borderColor: "rgba(227,171,41,0.3)",
    "&::before": {
      opacity: 1,
    },
    "& .icon-wrapper": {
      transform: "scale(1.08)",
      boxShadow: "0 8px 24px -4px rgba(227,171,41,0.35)",
    },
  },
  '[data-color-scheme="dark"] &': {
    "&::before": {
      background:
        "linear-gradient(135deg, rgba(227,171,41,0.1), rgba(66,2,112,0.08))",
    },
    "&:hover": {
      boxShadow: "0 20px 40px -12px rgba(227,171,41,0.2)",
      "& .icon-wrapper": {
        boxShadow: "0 8px 24px -4px rgba(227,171,41,0.45)",
      },
    },
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: 16,
  background: "linear-gradient(135deg, rgb(227,171,41), rgb(66,2,112))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginInline: "auto",
  marginBottom: theme.spacing(2.5),
  color: "#fff",
  transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s",
  "& .MuiSvgIcon-root": {
    fontSize: 30,
  },
}));

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 700,
  position: "relative",
}));

export const FeatureDesc = styled(Typography)({
  color: "var(--mui-palette-text-secondary)",
  lineHeight: 1.7,
  fontSize: "0.875rem",
});

export const AnimatedGridItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "visible" && prop !== "index",
})<{ visible: boolean; index: number }>(({ visible, index }) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s`,
}));
