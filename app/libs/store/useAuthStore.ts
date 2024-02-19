import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IAuthStoreState } from '@interface/store';

const useAuthStore = create<IAuthStoreState>()(
  devtools(
    set => ({
      count: 1,
      setCount: payload => set(state => ({ count: state.count + payload })),
    }),
    { name: 'authStore' },
  ),
);

export default useAuthStore;
