import { fetchTopCoins } from "@/services/markets";

import { TickerStrip } from "./TickerStrip";

export const CryptoTicker = async () => {
  const coins = await fetchTopCoins({ count: 50 });
  const mid = Math.ceil(coins.length / 2);

  return <TickerStrip topRow={coins.slice(0, mid)} bottomRow={coins.slice(mid)} />;
};
