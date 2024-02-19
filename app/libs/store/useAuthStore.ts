import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import jsCookie from 'js-cookie';
import { IAuthStoreState } from '@interface/store';

const useAuthStore = create<IAuthStoreState>()(
  devtools(
    set => ({
      isLoggedIn: false,
      userDetail: null,
      isLoadingUserSignIn: false,
      isFetchedUserSignIn: false,
      isLoadingUserSignOut: false,
      isFetchedUserSignOut: false,
      isLoadingUserDetail: false,
      isFetchedUserDetail: false,
      getAuthUserSignIn: async () => {
        try {
          set(() => ({
            isLoadingUserSignIn: true,
          }));
          // api
          jsCookie.set('access_token', 'token', {
            expires: 7,
          });
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
          // api
          jsCookie.remove('access_token');
          set(() => ({
            isLoggedIn: false,
            userDetail: null,
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
      getAuthUserDetail: async () => {
        try {
          set(() => ({
            isLoadingUserSignIn: true,
          }));
          // api
          set(() => ({
            isLoggedIn: true,
            userDetail: 'ryan',
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
    }),
    { name: 'authStore' },
  ),
);

export default useAuthStore;
