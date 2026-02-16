import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

import createRatesSlice, { type IRatesStore } from "./slices/rates";
import createTransferSlice, { type ITransferStore } from "./slices/transfer";
import createUiSlice, { type IUiStore } from "./slices/ui";

export type IAppStore = IUiStore & IRatesStore & ITransferStore;

const compare = <T>(a: T, b: T) => a === b || shallow(a, b);

export const useAppStore = createWithEqualityFn<IAppStore>(
  (...args) => ({
    ...createUiSlice(...args),
    ...createRatesSlice(...args),
    ...createTransferSlice(...args),
  }),
  compare,
);

export const getAppStore = useAppStore.getState;
export const setAppStore = useAppStore.setState;
