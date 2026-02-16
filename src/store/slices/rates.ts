import type { StateCreator } from "zustand";

export interface IRatesStore {
  btcUsd: number;
  usdAmd: number;
  rubAmd: number;
  ratesLoading: boolean;
  ratesError: string | null;
  ratesLastUpdated: string | null;
}

const createRatesSlice: StateCreator<IRatesStore> = () => ({
  btcUsd: 0,
  usdAmd: 0,
  rubAmd: 0,
  ratesLoading: true,
  ratesError: null,
  ratesLastUpdated: null,
});

export default createRatesSlice;
