export interface IAuthStoreState {
  isLoggedIn: boolean;
  userDetail: any | null;
  isLoadingUserSignIn: boolean;
  isFetchedUserSignIn: boolean;
  isLoadingUserSignOut: boolean;
  isFetchedUserSignOut: boolean;
  isLoadingUserDetail: boolean;
  isFetchedUserDetail: boolean;
  getAuthUserSignIn: () => Promise<void>;
  getAuthUserSignOut: () => Promise<void>;
  getAuthUserDetail: () => Promise<void>;
}

export interface IDataStoreState {
  count: number;
  setCount: (payload: number) => void;
}
