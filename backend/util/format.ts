export const dateMMDDYYYYToTZ = (date: string): Date => {
  const dateArr = date.split("/").map((x) => parseInt(x));
  return new Date(dateArr[2], dateArr[0] - 1, dateArr[1]);
};
