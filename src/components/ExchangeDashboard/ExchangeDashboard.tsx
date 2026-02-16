"use client";

import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";

import { useRatesPolling } from "@/hooks/useRatesPolling";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslator } from "@/hooks/useTranslator";
import type { IAppStore } from "@/store";
import { useAppStore } from "@/store";
import { SectionWrapper } from "@/components/SectionWrapper";
import { RateCard } from "@/components/RateCard";

import {
  DashboardTitle,
  LastUpdated,
  AnimatedCardWrapper,
  CardsContainer,
} from "./styled";

const selector = (store: IAppStore) => ({
  btcUsd: store.btcUsd,
  usdAmd: store.usdAmd,
  rubAmd: store.rubAmd,
  loading: store.ratesLoading,
  error: store.ratesError,
  lastUpdated: store.ratesLastUpdated,
});

const RATE_CARDS = [
  { key: "btcUsd", labelKey: "dashboardBtcUsd", fractionDigits: 0 },
  { key: "usdAmd", labelKey: "dashboardUsdAmd", fractionDigits: 2 },
  { key: "rubAmd", labelKey: "dashboardRubAmd", fractionDigits: 2 },
  { key: "usdRub", labelKey: "dashboardUsdRub", fractionDigits: 2 },
] as const;

export const ExchangeDashboard = () => {
  useRatesPolling();
  const translate = useTranslator();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { btcUsd, usdAmd, rubAmd, loading, error, lastUpdated } =
    useAppStore(selector);

  const usdRub = usdAmd && rubAmd ? usdAmd / rubAmd : 0;
  const visibleClass = isVisible ? "visible" : "";

  const values: Record<string, number> = { btcUsd, usdAmd, rubAmd, usdRub };

  return (
    <SectionWrapper id="rates">
      <CardsContainer ref={ref}>
        <DashboardTitle variant="h4" className={visibleClass}>
          {translate("dashboardTitle")}
        </DashboardTitle>

        {lastUpdated && (
          <LastUpdated variant="body2" className={visibleClass}>
            {translate("dashboardLastUpdated")}:{" "}
            {new Date(lastUpdated).toLocaleTimeString()}
          </LastUpdated>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {translate("dashboardError")}
          </Alert>
        )}

        <Grid container spacing={3}>
          {RATE_CARDS.map((card, index) => (
            <AnimatedCardWrapper
              key={card.key}
              size={{ xs: 6, md: 3 }}
              index={index}
              className={visibleClass}
            >
              <RateCard
                label={translate(card.labelKey)}
                value={values[card.key]}
                loading={loading}
                fractionDigits={card.fractionDigits}
              />
            </AnimatedCardWrapper>
          ))}
        </Grid>
      </CardsContainer>
    </SectionWrapper>
  );
};
