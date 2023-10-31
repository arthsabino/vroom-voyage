export const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "PHP",
  });
};

export const dateToMMDDYYY = (date: Date) => {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const dateMMDDYYYYToTZ = (date: string) => {
  const dateArr = date.split("/").map((x) => parseInt(x));
  return new Date(dateArr[2], dateArr[0] - 1, dateArr[1]).toDateString();
};