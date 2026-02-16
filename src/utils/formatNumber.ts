export const formatNumber = ({
  value,
  maximumFractionDigits = 2,
  minimumFractionDigits = 0,
}: {
  value: number;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
}): string =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
    minimumFractionDigits,
  }).format(value);
