export type OnValuesChange<T extends string = string> = (
  values: Record<T, number>
) => void;
