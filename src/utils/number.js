export function isNumber(value) {
  return !Number.isNaN(Number(value));
}

export function fillZero(n) {
  return `${n}`.padStart(2, "0");
}

export const getRandomNumber = (min = 0, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
