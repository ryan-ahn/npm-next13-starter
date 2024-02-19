export interface IAuthStoreState {
  isLoggedIn: boolean;
  userDetail: string | null;
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
  isMember: boolean;
  setIsMember: any;
  isLoadingMemberCheck: boolean;
  isFetchedMemberCheck: boolean;
  getDataMemberCheck: () => Promise<void>;
}
