"use client";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

/* ── Section header (left column on desktop) ── */

export const FaqGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1.6fr",
    alignItems: "start",
  },
}));

export const FaqHeaderColumn = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    position: "static",
    textAlign: "center",
  },
}));

export const FaqTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
}));

export const FaqSubtitle = styled(Typography)(({ theme }) => ({
  color: "var(--mui-palette-text-secondary)",
  lineHeight: 1.7,
  marginBottom: theme.spacing(3),
  maxWidth: 360,
  [theme.breakpoints.down("md")]: {
    maxWidth: 480,
    marginInline: "auto",
  },
}));

export const FaqCtaButton = styled(Button)({
  background: "linear-gradient(135deg, rgb(227,171,41), rgb(66,2,112))",
  color: "#fff",
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 10,
  paddingBottom: 10,
  "&:hover": {
    background: "linear-gradient(135deg, rgb(200,150,30), rgb(50,1,90))",
  },
});

/* ── Accordion list ── */

export const FaqListColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  background: "transparent",
  borderBottom: "1px solid var(--mui-palette-divider)",
  borderRadius: "0 !important",
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
  "&:first-of-type": {
    borderTop: "1px solid var(--mui-palette-divider)",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
}));

export const StyledAccordionSummary = styled(MuiAccordionSummary)(
  ({ theme }) => ({
    padding: theme.spacing(2.5, 0),
    minHeight: "unset",
    "& .MuiAccordionSummary-content": {
      margin: 0,
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
    },
  }),
);

export const StyledAccordionDetails = styled(MuiAccordionDetails)(
  ({ theme }) => ({
    padding: theme.spacing(0, 0, 3),
  }),
);

export const QuestionText = styled(Typography)({
  fontWeight: 600,
  fontSize: "1.05rem",
  lineHeight: 1.4,
  paddingRight: 16,
});

export const AnswerText = styled(Typography)({
  color: "var(--mui-palette-text-secondary)",
  lineHeight: 1.8,
  fontSize: "0.92rem",
  maxWidth: 560,
});

export const ToggleIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "expanded",
})<{ expanded: boolean }>(({ expanded }) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  background: expanded
    ? "linear-gradient(135deg, rgb(227,171,41), rgb(66,2,112))"
    : "transparent",
  border: expanded ? "none" : "1.5px solid var(--mui-palette-divider)",
  color: expanded ? "#fff" : "var(--mui-palette-text-secondary)",
  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
  fontSize: 18,
  fontWeight: 300,
  lineHeight: 1,
}));

export const AnimatedFaqItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "visible" && prop !== "index",
})<{ visible: boolean; index: number }>(({ visible, index }) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(20px)",
  transition: `opacity 0.5s cubic-bezier(0.4,0,0.2,1) ${index * 0.08}s, transform 0.5s cubic-bezier(0.4,0,0.2,1) ${index * 0.08}s`,
}));
