import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import jsCookie from 'js-cookie';
import { IAuthStoreState } from '@interface/store';

const useAuthStore = create<IAuthStoreState>()(
  devtools(
    set => ({
      isLoggedIn: false,
      isLoadingUserSignIn: false,
      isFetchedUserSignIn: false,
      isLoadingUserSignOut: false,
      isFetchedUserSignOut: false,
      getAuthUserSignIn: async () => {
        try {
          set(() => ({
            isLoadingUserSignIn: true,
          }));
          jsCookie.set('access_token', 'token');
          set(() => ({
            isLoggedIn: true,
            isLoadingUserSignIn: false,
            isFetchedUserSignIn: true,
          }));
        } catch (error: any) {
          set(() => ({
            isLoggedIn: false,
            isLoadingUserSignIn: false,
            isFetchedUserSignIn: false,
          }));
          throw Error(error.message);
        }
      },
      getAuthUserSignOut: async () => {
        try {
          set(() => ({
            isLoadingUserSignOut: true,
          }));
          jsCookie.remove('access_token');
          set(() => ({
            isLoggedIn: false,
            isLoadingUserSignOut: false,
            isFetchedUserSignOut: true,
          }));
        } catch (error: any) {
          set(() => ({
            isLoggedIn: false,
            isLoadingUserSignOut: false,
            isFetchedUserSignOut: false,
          }));
          throw Error(error.message);
        }
      },
    }),
    { name: 'authStore' },
  ),
);

export default useAuthStore;
