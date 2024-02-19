import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IDataStoreState } from '@interface/store';

const useDataStore = create<IDataStoreState>()(
  devtools(
    set => ({
      isMember: false,
      setIsMember: () =>
        set({
          isMember: false,
          isLoadingMemberCheck: false,
          isFetchedMemberCheck: false,
        }),
      isLoadingMemberCheck: false,
      isFetchedMemberCheck: false,
      getDataMemberCheck: async () => {
        try {
          set(() => ({
            isLoadingMemberCheck: true,
          }));
          // api
          set(() => ({
            isMember: true,
            isLoadingMemberCheck: false,
            isFetchedMemberCheck: true,
          }));
        } catch (error: any) {
          set(() => ({
            isMember: false,
            isLoadingMemberCheck: false,
            isFetchedMemberCheck: false,
          }));
          throw Error(error.message);
        }
      },
    }),
    { name: 'dataStore' },
  ),
);

export default useDataStore;
