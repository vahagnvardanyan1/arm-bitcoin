import { getTranslations } from "next-intl/server";

import TelegramIcon from "@mui/icons-material/Telegram";
import Box from "@mui/material/Box";

import { TELEGRAM_URL } from "@/constants/configs";

import {
  HeroRoot,
  BackgroundGlow,
  HeroContainer,
  LogoGif,
  Title,
  Subtitle,
  TelegramButton,
} from "./styled";

export const Hero = async () => {
  const t = await getTranslations();

  return (
    <HeroRoot>
      <BackgroundGlow />

      <HeroContainer maxWidth="md">
        <Box className="animate-fade-in-up">
          <LogoGif src="/logo.gif" alt={t("appTitle")} />
        </Box>

        <Title
          variant="h1"
          className="animate-fade-in-up-delay-1 gradient-text"
        >
          {t("heroTitle")}
        </Title>

        <Subtitle
          variant="h5"
          component="h2"
          className="animate-fade-in-up-delay-2"
        >
          {t("heroSubtitle")}
        </Subtitle>

        <Box className="animate-fade-in-up-delay-3">
          <TelegramButton
            variant="contained"
            size="large"
            startIcon={<TelegramIcon />}
            href={TELEGRAM_URL}
          >
            {t("heroCtaTelegram")}
          </TelegramButton>
        </Box>
      </HeroContainer>
    </HeroRoot>
  );
};
