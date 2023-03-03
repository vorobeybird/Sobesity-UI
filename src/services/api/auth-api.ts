import { retry } from '@reduxjs/toolkit/query/react';

import { api } from './api';

export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  nickname: string;
  registered_at: string;
  user_id: number;
}
// interface AuthService {
//   isLoggedIn: boolean;
//   getCurrentUser(): User | undefined;
//   login(user: IUserLogIn): Promise<AxiosResponse>;
//   logout(): Promise<AxiosResponse>;
//   register(user: IUserRegistration): Promise<AxiosResponse>;
// }

// const authService: AuthService = {
//   isLoggedIn: false,
//   getCurrentUser() {
//     // todo
//     let user;

//     return user;
//   },
//   login(user) {
//     return apiClient.post('user/login', { ...user });
//   },
//   logout() {
//     return apiClient.post('users/logout');
//   },
//   register(user: IUserRegistration) {
//     const { policy: deletedKey, ...otherKeys } = user;

//     return apiClient.post('user', otherKeys);
//   },
// };

// export { authService };

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, { email: string }>({
      query: (email) => ({
        url: 'user',
        method: 'GET',
        params: { email },
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' });
        },
      },
    }),
    login: build.mutation<{ access_token: string }, any>({
      query: (credentials: User) => ({
        url: 'user/login',
        method: 'POST',
        body: credentials,
      }),
      extraOptions: {
        backoff: () => {
          // We intentionally error once on login, and this breaks out of retrying. The next login attempt will succeed.
          retry.fail({ fake: 'error' });
        },
      },
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery } = authApi;
