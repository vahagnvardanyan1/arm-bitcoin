"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const TickerWrapper = styled(Box)({
  overflow: "hidden",
  position: "relative",
  width: "100%",
  borderTop: "1px solid var(--mui-palette-divider)",
  borderBottom: "1px solid var(--mui-palette-divider)",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 80,
    zIndex: 1,
    pointerEvents: "none",
  },
  "&::before": {
    left: 0,
    background:
      "linear-gradient(to right, var(--mui-palette-background-default), transparent)",
  },
  "&::after": {
    right: 0,
    background:
      "linear-gradient(to left, var(--mui-palette-background-default), transparent)",
  },
});

export const TickerRow = styled(Box)({
  overflow: "hidden",
  "&:first-of-type": {
    borderBottom: "1px solid var(--mui-palette-divider)",
  },
});

export const TickerTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})<{ reverse?: boolean }>(({ reverse }) => ({
  display: "flex",
  width: "max-content",
  animation: `tickerScroll 80s linear infinite ${reverse ? "reverse" : "normal"}`,
  "&:hover": {
    animationPlayState: "paused",
  },
}));

export const CoinChip = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1.2),
  padding: theme.spacing(1.5, 2.5),
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const CoinIcon = styled("img")({
  width: 28,
  height: 28,
  borderRadius: "50%",
  flexShrink: 0,
});

export const CoinName = styled(Typography)({
  fontWeight: 700,
  fontSize: "0.9rem",
  lineHeight: 1,
});

export const CoinSymbol = styled(Typography)({
  fontWeight: 600,
  fontSize: "0.75rem",
  color: "var(--mui-palette-text-secondary)",
  lineHeight: 1,
});

export const CoinPrice = styled(Typography)({
  fontWeight: 500,
  fontSize: "0.9rem",
  fontVariantNumeric: "tabular-nums",
  lineHeight: 1,
});

export const CoinChange = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "positive",
})<{ positive: boolean }>(({ positive }) => ({
  fontWeight: 600,
  fontSize: "0.8rem",
  lineHeight: 1,
  color: positive ? "#16c784" : "#ea3943",
}));
