"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const BannerRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: 24,
  background: "linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  minHeight: 320,
  opacity: 0,
  transform: "translateY(40px)",
  transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    minHeight: 380,
  },
}));

export const GlowOrb = styled(Box)({
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
  filter: "blur(80px)",
  "&.orb1": {
    width: 300,
    height: 300,
    background: "rgba(227,171,41,0.2)",
    top: "-15%",
    left: "-5%",
  },
  "&.orb2": {
    width: 250,
    height: 250,
    background: "rgba(66,2,112,0.25)",
    bottom: "-20%",
    right: "10%",
  },
  "&.orb3": {
    width: 180,
    height: 180,
    background: "rgba(227,171,41,0.1)",
    top: "50%",
    right: "30%",
    transform: "translateY(-50%)",
  },
});

export const BannerContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2.5),
  padding: theme.spacing(5, 4),
  textAlign: "center",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 6),
    textAlign: "left",
  },
}));

export const BannerLabel = styled(Typography)({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "rgb(227,171,41)",
  justifyContent: "center",
  "@media (min-width: 900px)": {
    justifyContent: "flex-start",
  },
});

export const BannerTitle = styled(Typography)({
  fontWeight: 800,
  fontSize: "1.75rem",
  lineHeight: 1.15,
  color: "#fff",
  "@media (min-width: 900px)": {
    fontSize: "2.25rem",
  },
});

export const BannerTitleAccent = styled("span")({
  background: "linear-gradient(90deg, rgb(227,171,41), rgb(255,215,100))",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const BannerDescription = styled(Typography)({
  color: "rgba(255,255,255,0.65)",
  fontSize: "0.95rem",
  lineHeight: 1.7,
  maxWidth: 440,
  margin: "0 auto",
  "@media (min-width: 900px)": {
    fontSize: "1rem",
    margin: 0,
  },
});

export const BannerCta = styled(Button)({
  alignSelf: "center",
  paddingLeft: 36,
  paddingRight: 36,
  paddingTop: 14,
  paddingBottom: 14,
  fontSize: "0.95rem",
  fontWeight: 700,
  background: "linear-gradient(135deg, rgb(227,171,41), rgb(255,200,60))",
  color: "#1a0a2e",
  borderRadius: 14,
  boxShadow: "0 4px 24px rgba(227,171,41,0.3)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    background: "linear-gradient(135deg, rgb(255,200,60), rgb(227,171,41))",
    boxShadow: "0 6px 32px rgba(227,171,41,0.45)",
    transform: "translateY(-2px)",
  },
  "@media (min-width: 900px)": {
    alignSelf: "flex-start",
  },
});

export const BannerImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 3, 4, 3),
  opacity: 0,
  transform: "scale(0.9)",
  transition: "opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s",
  "&.visible": {
    opacity: 1,
    transform: "scale(1)",
  },
  "& img": {
    width: 340,
    height: "auto",
    objectFit: "contain",
    filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.4))",
    [theme.breakpoints.up("md")]: {
      width: 460,
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 6, 4, 0),
  },
}));

export const StatsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  justifyContent: "center",
  marginTop: theme.spacing(0.5),
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

export const StatItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (min-width: 900px)": {
    alignItems: "flex-start",
  },
});

export const StatValue = styled(Typography)({
  fontWeight: 800,
  fontSize: "1.25rem",
  color: "#fff",
});

export const StatLabel = styled(Typography)({
  fontSize: "0.7rem",
  fontWeight: 500,
  color: "rgba(255,255,255,0.45)",
  textTransform: "uppercase",
  letterSpacing: 1,
});
