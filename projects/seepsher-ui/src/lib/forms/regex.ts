export const REGEX = {
  phone: /^[0-9]{9}$/,
} as const;

export type RegexKey = keyof typeof REGEX;
