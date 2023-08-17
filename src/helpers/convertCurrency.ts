export const convertCurrency = (amount: number) => {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedCurrency = currencyFormatter.format(amount);
  return formattedCurrency;
};
