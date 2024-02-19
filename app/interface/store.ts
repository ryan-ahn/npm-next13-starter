export interface IAuthStoreState {
  isLoggedIn: boolean;
  isLoadingUserSignIn: boolean;
  isFetchedUserSignIn: boolean;
  isLoadingUserSignOut: boolean;
  isFetchedUserSignOut: boolean;
  getAuthUserSignIn: () => Promise<void>;
  getAuthUserSignOut: () => Promise<void>;
}

export interface IDataStoreState {
  count: number;
  setCount: (payload: number) => void;
}
