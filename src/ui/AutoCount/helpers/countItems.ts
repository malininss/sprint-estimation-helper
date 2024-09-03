export const countItems = <T extends string>(items: T[]): Record<T, number> => {
  const result: Record<T, number> = {} as Record<T, number>;

  items.forEach((item) => {
    result[item] = (result[item] || 0) + 1;
  });

  return result;
};
