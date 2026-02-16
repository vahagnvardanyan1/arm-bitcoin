"use client";

import { useCallback, useMemo } from "react";

import type { IAppStore } from "@/store";
import { setAppStore, useAppStore } from "@/store";

const selector = (store: IAppStore) => ({
  crypto: store.transferCrypto,
  wallet: store.transferWallet,
  amount: store.transferAmount,
  submitting: store.transferSubmitting,
  success: store.transferSuccess,
  btcUsd: store.btcUsd,
});

export const useTransferForm = () => {
  const { crypto, wallet, amount, submitting, success, btcUsd } =
    useAppStore(selector);

  const estimatedBtc = useMemo(() => {
    const numAmount = Number(amount);

    if (!numAmount || !btcUsd) return 0;

    return numAmount / btcUsd;
  }, [amount, btcUsd]);

  const walletError = useMemo(
    () => wallet.length > 0 && wallet.length < 26,
    [wallet],
  );

  const amountError = useMemo(() => {
    const num = Number(amount);

    return amount.length > 0 && (isNaN(num) || num <= 0);
  }, [amount]);

  const isValid = useMemo(
    () =>
      wallet.length >= 26 && Number(amount) > 0 && !walletError && !amountError,
    [wallet, amount, walletError, amountError],
  );

  const setCrypto = useCallback(
    (value: string) => setAppStore({ transferCrypto: value }),
    [],
  );

  const setWallet = useCallback(
    (value: string) => setAppStore({ transferWallet: value }),
    [],
  );

  const setAmount = useCallback(
    (value: string) => setAppStore({ transferAmount: value }),
    [],
  );

  const submit = useCallback(() => {
    if (!isValid) return;

    setAppStore({ transferSubmitting: true });

    setTimeout(() => {
      setAppStore({ transferSubmitting: false, transferSuccess: true });
    }, 1000);
  }, [isValid]);

  const closeSuccess = useCallback(() => {
    setAppStore({
      transferSuccess: false,
      transferWallet: "",
      transferAmount: "",
    });
  }, []);

  return {
    crypto,
    wallet,
    amount,
    submitting,
    success,
    estimatedBtc,
    walletError,
    amountError,
    isValid,
    setCrypto,
    setWallet,
    setAmount,
    submit,
    closeSuccess,
  };
};
