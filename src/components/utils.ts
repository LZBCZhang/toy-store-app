export const noop = (_?: any) => {};

export const isListEmpty = <T>(list?: T[] | null): boolean => list === undefined || list === null || list.length === 0;

export const capitalize = (value?: string | null) => (value ? value.charAt(0).toUpperCase() + value.slice(1) : value);

export const sortByAscending = (a: string | number, b: string | number) => (a < b ? -1 : a > b ? 1 : 0);

export const sortByDescending = (a: string | number, b: string | number) => (a > b ? -1 : a < b ? 1 : 0);

