"use client";

import { useCallback, useMemo, useState } from "react";

import SwapVertIcon from "@mui/icons-material/SwapVert";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

import type { Currency } from "@/constants/currencies";
import { FEE_PERCENTAGE } from "@/constants/configs";
import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslator } from "@/hooks/useTranslator";
import { SectionWrapper } from "@/components/SectionWrapper";
import { convertCurrency } from "@/utils/convertCurrency";
import { formatNumber } from "@/utils/formatNumber";

import {
  CalcWrapper,
  CalcCard,
  CalcTitle,
  CalcField,
  CalcAmountField,
  CalcRow,
  ResultBox,
  ResultLabel,
  ResultValue,
  FeeText,
} from "./styled";

const CURRENCIES: Currency[] = ["BTC", "USD", "AMD", "RUB"];

export const Calculator = () => {
  const translate = useTranslator();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [from, setFrom] = useState<Currency>("USD");
  const [to, setTo] = useState<Currency>("BTC");
  const [amount, setAmount] = useState("1000");

  const rawResult = useMemo(() => {
    const num = Number(amount);

    if (!num) return 0;

    const converted = convertCurrency({ amount: num, from, to });
    const fee = converted * (FEE_PERCENTAGE / 100);

    return converted - fee;
  }, [amount, from, to]);

  const animatedResult = useAnimatedNumber({ target: rawResult });

  const fractionDigits = to === "BTC" ? 8 : to === "AMD" ? 0 : 2;
  const visibleClass = isVisible ? "visible" : "";

  const handleSwap = useCallback(() => {
    setFrom(to);
    setTo(from);
  }, [from, to]);

  return (
    <SectionWrapper id="calculator">
      <CalcWrapper ref={ref}>
        <CalcCard className={visibleClass}>
          <CalcTitle variant="h4" className={visibleClass}>
            {translate("calculatorTitle")}
          </CalcTitle>

          <CalcRow className={visibleClass}>
            <CalcField
              select
              label={translate("calculatorFrom")}
              value={from}
              onChange={(e) => setFrom(e.target.value as Currency)}
            >
              {CURRENCIES.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </CalcField>

            <IconButton
              onClick={handleSwap}
              aria-label={translate("calculatorSwap")}
            >
              <SwapVertIcon />
            </IconButton>

            <CalcField
              select
              label={translate("calculatorTo")}
              value={to}
              onChange={(e) => setTo(e.target.value as Currency)}
            >
              {CURRENCIES.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </CalcField>
          </CalcRow>

          <CalcAmountField
            label={translate("calculatorAmount")}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            fullWidth
            className={visibleClass}
          />

          <ResultBox className={visibleClass}>
            <ResultLabel variant="body2">
              {translate("calculatorResult")}
            </ResultLabel>
            <ResultValue variant="h5">
              {formatNumber({
                value: animatedResult,
                maximumFractionDigits: fractionDigits,
                minimumFractionDigits: fractionDigits,
              })}{" "}
              {to}
            </ResultValue>
            <FeeText variant="caption">
              {translate("calculatorFee")} ({FEE_PERCENTAGE}%)
            </FeeText>
          </ResultBox>
        </CalcCard>
      </CalcWrapper>
    </SectionWrapper>
  );
};
