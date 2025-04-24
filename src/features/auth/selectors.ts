import { RootState } from '@/store'; 

export const selectCurrentUser = (state: RootState) => state.auth.username;
export const selectAuthStatus = (state: RootState) => state.auth.isAuthenticated;
