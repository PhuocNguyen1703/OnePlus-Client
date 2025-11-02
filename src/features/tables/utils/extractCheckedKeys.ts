import { CheckedState } from '@radix-ui/react-checkbox'

export const extractCheckedKeys = <T extends string>(record: Record<T, CheckedState>): T[] => {
  return Object.entries(record)
    .filter(([_, checked]) => checked === true)
    .map(([key]) => key as T)
}
