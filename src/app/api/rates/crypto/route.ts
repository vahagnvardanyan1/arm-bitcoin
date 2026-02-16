import { NextResponse } from "next/server";

import { COINGECKO_API_URL } from "@/constants/configs";

interface CoinGeckoResponse {
  bitcoin: {
    usd: number;
  };
}

export const GET = async () => {
  try {
    const response = await fetch(
      `${COINGECKO_API_URL}?ids=bitcoin&vs_currencies=usd`,
      { next: { revalidate: 30 } },
    );

    if (!response.ok) {
      throw new Error("CoinGecko API error");
    }

    const data: CoinGeckoResponse = await response.json();

    return NextResponse.json({
      btcUsd: data.bitcoin.usd,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch crypto rates" },
      { status: 500 },
    );
  }
};
