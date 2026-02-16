import type { Currency } from "@/constants/currencies";
import { getAppStore } from "@/store";

export const convertCurrency = ({
  amount,
  from,
  to,
}: {
  amount: number;
  from: Currency;
  to: Currency;
}): number => {
  if (from === to || amount === 0) return amount;

  const { btcUsd, usdAmd, rubAmd } = getAppStore();
  const usdRub = usdAmd && rubAmd ? usdAmd / rubAmd : 0;

  const toUsd: Record<Currency, number> = {
    USD: 1,
    BTC: btcUsd,
    AMD: usdAmd ? 1 / usdAmd : 0,
    RUB: usdRub ? 1 / usdRub : 0,
  };

  const amountInUsd = amount * toUsd[from];

  const fromUsd: Record<Currency, number> = {
    USD: 1,
    BTC: btcUsd ? 1 / btcUsd : 0,
    AMD: usdAmd,
    RUB: usdRub,
  };

  return amountInUsd * fromUsd[to];
};
