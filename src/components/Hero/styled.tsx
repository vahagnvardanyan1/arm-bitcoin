"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import MuiContainer from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const HeroRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(14),
  },
}));

export const BackgroundGlow = styled(Box)({
  position: "absolute",
  top: "-40%",
  left: "50%",
  transform: "translateX(-50%)",
  width: 800,
  height: 600,
  background:
    "radial-gradient(ellipse, rgba(0,112,243,0.12) 0%, rgba(121,40,202,0.06) 40%, transparent 70%)",
  pointerEvents: "none",
});

export const HeroContainer = styled(MuiContainer)({
  position: "relative",
  textAlign: "center",
});

export const BadgeChip = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  backgroundColor: "rgba(0,112,243,0.08)",
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: 13,
  border: "1px solid",
  borderColor: "rgba(0,112,243,0.2)",
}));

export const Title = styled(Typography)(({ theme }) => ({
  lineHeight: 1.1,
  marginBottom: 20,
  fontSize: "2.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 40,
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
})) as typeof Typography;

export const PrimaryButton = styled(Button)({
  paddingLeft: 28,
  paddingRight: 28,
  paddingTop: 10,
  paddingBottom: 10,
  background: "linear-gradient(135deg, #0070f3, #7928ca)",
  "&:hover": {
    background: "linear-gradient(135deg, #005bb5, #6020a8)",
  },
});

export const OutlinedButton = styled(Button)({
  paddingLeft: 28,
  paddingRight: 28,
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: "#fff",
  borderColor: "rgba(0,0,0,0.12)",
  color: "#171717",
  "&:hover": {
    backgroundColor: "#f5f5f5",
    borderColor: "rgba(0,0,0,0.2)",
  },
});

export const DemoTitle = styled(Typography)({
  marginTop: 64,
  marginBottom: 12,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  opacity: 0.5,
}) as typeof Typography;

export const DemoWrapper = styled(Box)({
  maxWidth: 320,
  marginLeft: "auto",
  marginRight: "auto",
});
