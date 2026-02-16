export const SUPPORTED_CRYPTOS = ["BTC"] as const;

export type SupportedCrypto = (typeof SUPPORTED_CRYPTOS)[number];

export const SUPPORTED_FIATS = ["USD", "AMD", "RUB"] as const;

export type SupportedFiat = (typeof SUPPORTED_FIATS)[number];

export type Currency = SupportedCrypto | SupportedFiat;
