import { fillZero } from "./number";
export function formatDate(d) {
  const date = new Date(d);

  const year = date.getFullYear();
  const month = fillZero(date.getMonth() + 1);
  const day = fillZero(date.getDate());
  const hour = fillZero(date.getHours());
  const minute = fillZero(date.getMinutes());
  const second = fillZero(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
