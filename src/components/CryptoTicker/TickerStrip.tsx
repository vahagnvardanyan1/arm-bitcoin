"use client";

import type { CoinMarketData } from "@/services/markets";

import Box from "@mui/material/Box";

import {
  TickerWrapper,
  TickerRow,
  TickerTrack,
  CoinChip,
  CoinIcon,
  CoinName,
  CoinSymbol,
  CoinPrice,
  CoinChange,
} from "./styled";

interface TickerStripProps {
  topRow: CoinMarketData[];
  bottomRow: CoinMarketData[];
}

const formatPrice = (price: number) => {
  if (price >= 1)
    return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (price >= 0.01) return `$${price.toFixed(4)}`;
  return `$${price.toFixed(7)}`;
};

const formatChange = (change: number) => {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
};

const CoinItem = ({ coin }: { coin: CoinMarketData }) => (
  <CoinChip>
    <CoinIcon src={coin.image} alt={coin.name} loading="lazy" />
    <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
      <CoinName>{coin.name}</CoinName>
      <CoinSymbol>{coin.symbol}</CoinSymbol>
    </Box>
    <CoinPrice>{formatPrice(coin.currentPrice)}</CoinPrice>
    <CoinChange positive={coin.priceChangePercentage24h >= 0}>
      {formatChange(coin.priceChangePercentage24h)}
    </CoinChange>
  </CoinChip>
);

const DuplicatedRow = ({
  coins,
  reverse,
}: {
  coins: CoinMarketData[];
  reverse?: boolean;
}) => (
  <TickerRow>
    <TickerTrack reverse={reverse}>
      {coins.map((coin) => (
        <CoinItem key={`a-${coin.id}`} coin={coin} />
      ))}
      {coins.map((coin) => (
        <CoinItem key={`b-${coin.id}`} coin={coin} />
      ))}
    </TickerTrack>
  </TickerRow>
);

export const TickerStrip = ({ topRow, bottomRow }: TickerStripProps) => {
  if (topRow.length === 0 && bottomRow.length === 0) return null;

  return (
    <TickerWrapper>
      <DuplicatedRow coins={topRow} />
      <DuplicatedRow coins={bottomRow} reverse />
    </TickerWrapper>
  );
};
