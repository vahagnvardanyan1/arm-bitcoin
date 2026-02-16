import { COINGECKO_MARKETS_URL } from "@/constants/configs";

export interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  priceChangePercentage24h: number;
}

interface CoinGeckoMarketItem {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number | null;
}

export const fetchTopCoins = async ({
  count = 25,
}: { count?: number } = {}): Promise<CoinMarketData[]> => {
  const url = `${COINGECKO_MARKETS_URL}?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1&sparkline=false`;

  const response = await fetch(url, { next: { revalidate: 120 } });

  if (!response.ok) {
    return [];
  }

  const data: CoinGeckoMarketItem[] = await response.json();

  return data.map((coin) => ({
    id: coin.id,
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    image: coin.image,
    currentPrice: coin.current_price,
    priceChangePercentage24h: coin.price_change_percentage_24h ?? 0,
  }));
};
