import { IDataState } from '@interface/store';
import { create } from 'zustand';

export const useDataStore = create<IDataState>(set => ({
  count: 1,
  setCount: payload => set(state => ({ count: state.count + payload })),
}));
