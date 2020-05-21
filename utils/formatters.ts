export const capitalizeWord = (word: string): string => {
  return `${word.charAt(0).toUpperCase()}${word.toLowerCase().slice(1)}`;
};
