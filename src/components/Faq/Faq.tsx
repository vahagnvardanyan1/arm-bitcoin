import { getTranslations } from "next-intl/server";

import TelegramIcon from "@mui/icons-material/Telegram";

import { TELEGRAM_URL } from "@/constants/configs";
import { SectionWrapper } from "@/components/SectionWrapper";

import {
  FaqGrid,
  FaqHeaderColumn,
  FaqTitle,
  FaqSubtitle,
  FaqCtaButton,
} from "./styled";
import { FaqAccordionList } from "./FaqAccordionList";

const FAQ_KEYS = [
  { q: "faqHowBuyQuestion", a: "faqHowBuyAnswer" },
  { q: "faqFeesQuestion", a: "faqFeesAnswer" },
  { q: "faqTimeQuestion", a: "faqTimeAnswer" },
  { q: "faqMinQuestion", a: "faqMinAnswer" },
  { q: "faqSafeQuestion", a: "faqSafeAnswer" },
] as const;

export const Faq = async () => {
  const t = await getTranslations();

  const items = FAQ_KEYS.map(({ q, a }) => ({
    question: t(q),
    answer: t(a),
  }));

  return (
    <SectionWrapper id="faq">
      <FaqGrid>
        <FaqHeaderColumn>
          <FaqTitle variant="h4" className="animate-fade-in-up">
            {t("faqTitle")}
          </FaqTitle>
          <FaqSubtitle variant="body1" className="animate-fade-in-up-delay-1">
            {t("faqSubtitle")}
          </FaqSubtitle>
          <FaqCtaButton
            variant="contained"
            startIcon={<TelegramIcon />}
            href={TELEGRAM_URL}
            className="animate-fade-in-up-delay-2"
          >
            {t("faqCtaTelegram")}
          </FaqCtaButton>
        </FaqHeaderColumn>

        <FaqAccordionList items={items} />
      </FaqGrid>
    </SectionWrapper>
  );
};
