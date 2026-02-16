interface CryptoRatesResponse {
  btcUsd: number;
  timestamp: string;
}

interface FiatRatesResponse {
  usdAmd: number;
  rubAmd: number;
  timestamp: string;
}

export const fetchCryptoRates = async (): Promise<CryptoRatesResponse> => {
  const response = await fetch("/api/rates/crypto");

  if (!response.ok) {
    throw new Error("Failed to fetch crypto rates");
  }

  return response.json();
};

export const fetchFiatRates = async (): Promise<FiatRatesResponse> => {
  const response = await fetch("/api/rates/fiat");

  if (!response.ok) {
    throw new Error("Failed to fetch fiat rates");
  }

  return response.json();
};
