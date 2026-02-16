"use client";

import { useCallback, useEffect } from "react";

import { RATE_REFRESH_INTERVAL } from "@/constants/configs";
import { fetchCryptoRates, fetchFiatRates } from "@/services/rates";
import { setAppStore } from "@/store";

export const useRatesPolling = () => {
  const fetchRates = useCallback(async () => {
    try {
      setAppStore({ ratesLoading: true, ratesError: null });

      const [crypto, fiat] = await Promise.all([
        fetchCryptoRates(),
        fetchFiatRates(),
      ]);

      setAppStore({
        btcUsd: crypto.btcUsd,
        usdAmd: fiat.usdAmd,
        rubAmd: fiat.rubAmd,
        ratesLoading: false,
        ratesLastUpdated: new Date().toISOString(),
      });
    } catch {
      setAppStore({
        ratesLoading: false,
        ratesError: "Failed to load rates",
      });
    }
  }, []);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, RATE_REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [fetchRates]);
};
