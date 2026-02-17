"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { INSTAGRAM_URL, TELEGRAM_URL } from "@/constants/configs";
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
            <Stack direction="row" spacing={1} flexWrap="wrap">
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
              <Button
                variant="outlined"
                startIcon={<InstagramIcon />}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                {translate("footerInstagramCta")}
              </Button>
            </Stack>
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
