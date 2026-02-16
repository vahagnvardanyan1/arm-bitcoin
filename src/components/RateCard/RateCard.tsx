"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";
import { formatNumber } from "@/utils/formatNumber";

import {
  CardRoot,
  CardLabel,
  CardValue,
  SkeletonValue,
  LiveDot,
  CardHeader,
} from "./styled";

interface RateCardProps {
  label: string;
  value: number;
  loading: boolean;
  fractionDigits?: number;
}

export const RateCard = ({
  label,
  value,
  loading,
  fractionDigits = 2,
}: RateCardProps) => {
  const animated = useAnimatedNumber({ target: value });

  return (
    <CardRoot>
      <CardHeader>
        <CardLabel variant="body2">{label}</CardLabel>
        {!loading && <LiveDot />}
      </CardHeader>
      {loading ? (
        <SkeletonValue variant="text" />
      ) : (
        <CardValue variant="h5">
          {formatNumber({
            value: animated,
            maximumFractionDigits: fractionDigits,
            minimumFractionDigits: fractionDigits,
          })}
        </CardValue>
      )}
    </CardRoot>
  );
};
