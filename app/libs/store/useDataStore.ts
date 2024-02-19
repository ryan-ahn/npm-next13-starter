import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IDataStoreState } from '@interface/store';

const useDataStore = create<IDataStoreState>()(
  devtools(
    set => ({
      count: 1,
      setCount: payload => set(state => ({ count: state.count + payload })),
    }),
    { name: 'dataStore' },
  ),
);

export default useDataStore;
