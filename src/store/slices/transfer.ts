import type { StateCreator } from "zustand";

export interface ITransferStore {
  transferCrypto: string;
  transferWallet: string;
  transferAmount: string;
  transferSubmitting: boolean;
  transferSuccess: boolean;
}

const createTransferSlice: StateCreator<ITransferStore> = () => ({
  transferCrypto: "BTC",
  transferWallet: "",
  transferAmount: "",
  transferSubmitting: false,
  transferSuccess: false,
});

export default createTransferSlice;
