export const currencyFormatter = (price) => {
  console.log(price);
  if (!price) return;
  return price.toLocalString("bn-BD", {
    style: "currency",
    currency: "BDT",
  });
};
