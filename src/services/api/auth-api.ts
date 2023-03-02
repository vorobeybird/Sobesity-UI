import { retry } from '@reduxjs/toolkit/query/react';

import { api } from './api';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
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
    login: build.mutation<{ token: string; user: User }, any>({
      query: (credentials: User) => ({
        url: 'login',
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

export const { useLoginMutation } = authApi;
