const currencyBRMask = (input: number) =>
  "R$ " +
  input
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");

export { currencyBRMask };
