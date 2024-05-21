import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (str: string, len: number) => {
  if (str.length < len) return str;

  return str.substring(0, len) + "...";
};

export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const firstLetterUppercase = (str: string) => {
  const valueString = str.toLowerCase();
  return valueString
    .split(" ")
    .map(
      (value) =>
        `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
    )
    .join(" ");
};

export function randomId(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
