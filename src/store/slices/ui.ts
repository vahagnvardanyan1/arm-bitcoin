import type { StateCreator } from "zustand";

export interface IUiStore {
  sidebarOpen: boolean;
}

const createUiSlice: StateCreator<IUiStore> = () => ({
  sidebarOpen: false,
});

export default createUiSlice;
