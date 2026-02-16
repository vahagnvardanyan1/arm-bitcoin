"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const FooterRoot = styled(Box)(({ theme }) => ({
  borderTop: "1px solid",
  borderColor: theme.palette.divider,
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(3),
  marginTop: theme.spacing(4),
})) as typeof Box;

export const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
  borderTop: "1px solid",
  borderColor: theme.palette.divider,
  paddingTop: theme.spacing(2),
  textAlign: "center",
}));

export const FooterBrand = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
}));

export const FooterLogo = styled("img")({
  width: 36,
  height: 36,
  borderRadius: "50%",
  objectFit: "cover",
});
