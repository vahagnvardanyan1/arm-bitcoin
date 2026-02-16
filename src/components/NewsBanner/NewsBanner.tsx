"use client";

import TelegramIcon from "@mui/icons-material/Telegram";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

import { TELEGRAM_NEWS_URL } from "@/constants/configs";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslator } from "@/hooks/useTranslator";
import { SectionWrapper } from "@/components/SectionWrapper";

import {
  BannerRoot,
  GlowOrb,
  BannerContent,
  BannerLabel,
  BannerTitle,
  BannerTitleAccent,
  BannerDescription,
  BannerCta,
  BannerImageWrapper,
  StatsRow,
  StatItem,
  StatValue,
  StatLabel,
} from "./styled";

export const NewsBanner = () => {
  const translate = useTranslator();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const visibleClass = isVisible ? "visible" : "";

  return (
    <SectionWrapper id="news">
      <BannerRoot ref={ref} className={visibleClass}>
        <GlowOrb className="orb1" />
        <GlowOrb className="orb2" />
        <GlowOrb className="orb3" />

        <BannerContent className={visibleClass}>
          <BannerLabel>
            <CampaignOutlinedIcon sx={{ fontSize: 18 }} />
            Telegram Channel
          </BannerLabel>

          <BannerTitle variant="h3">
            {translate("newsTitle")}{" "}
            <BannerTitleAccent>Channel</BannerTitleAccent>
          </BannerTitle>

          <BannerDescription>{translate("newsDescription")}</BannerDescription>

          <StatsRow>
            <StatItem>
              <StatValue>{translate("newsStatUpdates")}</StatValue>
              <StatLabel>{translate("newsStatUpdatesLabel")}</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>{translate("newsStatFree")}</StatValue>
              <StatLabel>{translate("newsStatFreeLabel")}</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>24/7</StatValue>
              <StatLabel>{translate("newsStatAlwaysLabel")}</StatLabel>
            </StatItem>
          </StatsRow>

          <BannerCta
            variant="contained"
            startIcon={<TelegramIcon />}
            href={TELEGRAM_NEWS_URL}
          >
            {translate("newsCta")}
          </BannerCta>
        </BannerContent>

        <BannerImageWrapper className={visibleClass}>
          <img src="/news-mockup.png" alt="ArmBitcoin News" />
        </BannerImageWrapper>
      </BannerRoot>
    </SectionWrapper>
  );
};
