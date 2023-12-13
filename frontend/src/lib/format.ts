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

export const getStartOfTheDay = (date: Date): Date => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    0
  );
};

export const getEndOfTheDay = (date: Date): Date => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    11,
    59,
    59,
    59
  );
};