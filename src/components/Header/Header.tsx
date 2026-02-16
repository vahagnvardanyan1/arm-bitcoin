"use client";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useColorScheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslator } from "@/hooks/useTranslator";

import {
  ActionsBox,
  BrandBox,
  DarkIcon,
  LightIcon,
  LogoImage,
  StyledAppBar,
  StyledToolbar,
  ThemeToggleButton,
  TitleText,
  NavLink,
  NavBox,
  MenuButton,
} from "./styled";

const NAV_ITEMS = [
  { key: "navRates", href: "#rates" },
  { key: "navTransfer", href: "#transfer" },
  { key: "navCalculator", href: "#calculator" },
  { key: "navFaq", href: "#faq" },
] as const;

export const Header = () => {
  const { mode, setMode } = useColorScheme();
  const translate = useTranslator();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
  };

  return (
    <>
      <StyledAppBar position="sticky" elevation={0}>
        <StyledToolbar>
          <BrandBox>
            <LogoImage src="/logo.jpeg" alt={translate("appTitle")} />
            <TitleText variant="body1">{translate("appTitle")}</TitleText>
          </BrandBox>

          <NavBox>
            {NAV_ITEMS.map(({ key, href }) => (
              <NavLink key={key} href={href}>
                {translate(key)}
              </NavLink>
            ))}
          </NavBox>

          <ActionsBox>
            <LanguageSwitcher />
            <ThemeToggleButton
              onClick={toggleMode}
              aria-label={translate("toggleTheme")}
              size="small"
            >
              <LightIcon fontSize="small" />
              <DarkIcon fontSize="small" />
            </ThemeToggleButton>
            <MenuButton
              onClick={() => setDrawerOpen(true)}
              aria-label="menu"
              size="small"
            >
              <MenuIcon fontSize="small" />
            </MenuButton>
          </ActionsBox>
        </StyledToolbar>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250, pt: 2 }}>
          <ListItemButton
            onClick={() => setDrawerOpen(false)}
            sx={{ justifyContent: "flex-end" }}
          >
            <CloseIcon />
          </ListItemButton>
          {NAV_ITEMS.map(({ key, href }) => (
            <ListItemButton
              key={key}
              component="a"
              href={href}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={translate(key)} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};
