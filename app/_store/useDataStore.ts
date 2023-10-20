import { create } from 'zustand';
import { IDataState } from '@interface/store';

export const useDataStore = create<IDataState>(set => ({
  count: 1,
  setCount: payload => set(state => ({ count: state.count + payload })),
}));
