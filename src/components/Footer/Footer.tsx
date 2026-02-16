"use client";

import TelegramIcon from "@mui/icons-material/Telegram";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { TELEGRAM_URL } from "@/constants/configs";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslator } from "@/hooks/useTranslator";

import {
  FooterRoot,
  FooterContent,
  FooterBottom,
  FooterLogo,
  FooterBrand,
} from "./styled";

export const Footer = () => {
  const translate = useTranslator();

  return (
    <FooterRoot component="footer">
      <Container maxWidth="lg">
        <FooterContent>
          <Box>
            <FooterBrand>
              <FooterLogo src="/logo.jpeg" alt="ArmBitcoin" />
              <Typography variant="h6" fontWeight={700}>
                ArmBitcoin
              </Typography>
            </FooterBrand>
            <Button
              variant="outlined"
              startIcon={<TelegramIcon />}
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              {translate("footerTelegramCta")}
            </Button>
          </Box>

          <Box>
            <LanguageSwitcher />
          </Box>
        </FooterContent>

        <FooterBottom>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} {translate("footerCopyright")}
          </Typography>
        </FooterBottom>
      </Container>
    </FooterRoot>
  );
};
