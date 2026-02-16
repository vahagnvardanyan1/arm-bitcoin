"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiContainer from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const HeroRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(4),
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
    "radial-gradient(ellipse, rgba(227,171,41,0.12) 0%, rgba(66,2,112,0.06) 40%, transparent 70%)",
  pointerEvents: "none",
});

export const HeroContainer = styled(MuiContainer)({
  position: "relative",
  textAlign: "center",
});

export const LogoGif = styled("img")(({ theme }) => ({
  width: 180,
  height: 180,
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    width: 220,
    height: 220,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  lineHeight: 1.1,
  marginBottom: 20,
  fontSize: "1.75rem",
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

export const TelegramButton = styled(Button)({
  paddingLeft: 28,
  paddingRight: 28,
  paddingTop: 10,
  paddingBottom: 10,
  background: "linear-gradient(135deg, rgb(227,171,41), rgb(66,2,112))",
  color: "#fff",
  "&:hover": {
    background: "linear-gradient(135deg, rgb(200,150,30), rgb(50,1,90))",
  },
});

export const BtcPriceBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2, 4),
  borderRadius: theme.shape.borderRadius,
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
}));

export const BtcPriceLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
  letterSpacing: 1,
  fontSize: 12,
}));

export const BtcPriceValue = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.primary.main,
  fontVariantNumeric: "tabular-nums",
}));
