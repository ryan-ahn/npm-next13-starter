import { create } from 'zustand';
import { IDataState } from '@interface/store';

const useDataStore = create<IDataState>(set => ({
  count: 1,
  setCount: payload => set(state => ({ count: state.count + payload })),
}));

export default useDataStore;
