"use client";

import { useColorScheme } from "@mui/material/styles";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslator } from "@/hooks/useTranslator";

import {
  ActionsBox,
  BrandBox,
  DarkIcon,
  LightIcon,
  LogoBox,
  LogoText,
  StyledAppBar,
  StyledToolbar,
  ThemeToggleButton,
  TitleText,
} from "./styled";

export const Header = () => {
  const { mode, setMode } = useColorScheme();
  const translate = useTranslator();

  const toggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
  };

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <StyledToolbar>
        <BrandBox>
          <LogoBox>
            <LogoText>N</LogoText>
          </LogoBox>
          <TitleText variant="body1">{translate("appTitle")}</TitleText>
        </BrandBox>

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
        </ActionsBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};
