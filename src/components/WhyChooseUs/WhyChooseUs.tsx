import { getTranslations } from "next-intl/server";

import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

import { SectionWrapper } from "@/components/SectionWrapper";

import { WhyTitle, WhySubtitle } from "./styled";
import { FeatureGrid } from "./FeatureGrid";

const FEATURE_KEYS = [
  { icon: <GppGoodOutlinedIcon />, titleKey: "whySecureTitle", descKey: "whySecureDesc" },
  { icon: <RocketLaunchOutlinedIcon />, titleKey: "whyFastTitle", descKey: "whyFastDesc" },
  { icon: <AccountBalanceWalletOutlinedIcon />, titleKey: "whyFeesTitle", descKey: "whyFeesDesc" },
  { icon: <ForumOutlinedIcon />, titleKey: "whySupportTitle", descKey: "whySupportDesc" },
  { icon: <InsightsOutlinedIcon />, titleKey: "whyRatesTitle", descKey: "whyRatesDesc" },
  { icon: <FlagOutlinedIcon />, titleKey: "whyArmeniaTitle", descKey: "whyArmeniaDesc" },
] as const;

export const WhyChooseUs = async () => {
  const t = await getTranslations();

  const features = FEATURE_KEYS.map(({ icon, titleKey, descKey }) => ({
    icon,
    title: t(titleKey),
    description: t(descKey),
  }));

  return (
    <SectionWrapper id="why">
      <WhyTitle variant="h4" className="animate-fade-in-up">
        {t("whyTitle")}
      </WhyTitle>
      <WhySubtitle variant="body1" className="animate-fade-in-up-delay-1">
        {t("whySubtitle")}
      </WhySubtitle>

      <FeatureGrid features={features} />
    </SectionWrapper>
  );
};
