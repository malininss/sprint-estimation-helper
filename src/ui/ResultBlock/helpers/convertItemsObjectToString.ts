export const convertItemsObjectToString = (
  itemsCoCount: Record<string, number>
): string =>
  Object.entries(itemsCoCount)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
