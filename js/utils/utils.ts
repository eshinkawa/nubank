const validaCPF = (cpf: string) => {
  let nums, digits, sum, i, results, digits_equal;
  digits_equal = 1;
  if (cpf.length < 11) return false;
  for (i = 0; i < cpf.length - 1; i++)
    if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      digits_equal = 0;
      break;
    }
  if (!digits_equal) {
    nums = cpf.substring(0, 9);
    digits = cpf.substring(9);
    sum = 0;
    for (i = 10; i > 1; i--) sum += nums.charAt(10 - i) * i;
    results = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (results != digits.charAt(0)) return false;
    nums = cpf.substring(0, 10);
    sum = 0;
    for (i = 11; i > 1; i--) sum += nums.charAt(11 - i) * i;
    results = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (results != digits.charAt(1)) return false;
    return true;
  } else return false;
};

const isMailValid = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const currencyBRMask = (input: number) =>
  "R$ " +
  input
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");

export {
  validaCPF,
  isMailValid,
  currencyBRMask,
};
