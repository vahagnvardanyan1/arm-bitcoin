"use client";

import MenuItem from "@mui/material/MenuItem";

import { SUPPORTED_CRYPTOS } from "@/constants/currencies";
import { useTransferForm } from "@/hooks/useTransferForm";
import { useTranslator } from "@/hooks/useTranslator";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TransferSuccessModal } from "@/components/TransferSuccessModal";
import { formatNumber } from "@/utils/formatNumber";

import {
  FormCard,
  FormTitle,
  FormField,
  EstimateBox,
  EstimateLabel,
  EstimateValue,
  SubmitButton,
} from "./styled";

export const TransferForm = () => {
  const translate = useTranslator();
  const {
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
  } = useTransferForm();

  return (
    <SectionWrapper id="transfer">
      <FormCard className="animate-fade-in-up">
        <FormTitle variant="h4">{translate("transferTitle")}</FormTitle>

        <FormField
          select
          label={translate("transferCrypto")}
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)}
          fullWidth
        >
          {SUPPORTED_CRYPTOS.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </FormField>

        <FormField
          label={translate("transferWallet")}
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          error={walletError}
          helperText={walletError ? translate("transferWalletError") : " "}
          fullWidth
        />

        <FormField
          label={translate("transferAmount")}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          error={amountError}
          helperText={amountError ? translate("transferAmountError") : " "}
          type="number"
          fullWidth
        />

        {estimatedBtc > 0 && (
          <EstimateBox>
            <EstimateLabel variant="body2">
              {translate("transferEstimate")}
            </EstimateLabel>
            <EstimateValue variant="h6">
              {formatNumber({
                value: estimatedBtc,
                maximumFractionDigits: 8,
                minimumFractionDigits: 8,
              })}{" "}
              BTC
            </EstimateValue>
          </EstimateBox>
        )}

        <SubmitButton
          variant="contained"
          size="large"
          fullWidth
          disabled={!isValid || submitting}
          onClick={submit}
        >
          {submitting ? "..." : translate("transferSubmit")}
        </SubmitButton>
      </FormCard>

      <TransferSuccessModal open={success} onClose={closeSuccess} />
    </SectionWrapper>
  );
};
