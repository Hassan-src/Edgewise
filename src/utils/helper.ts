export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );

export const formatPercentage = (value: number) => value?.toFixed(2) + "%";
