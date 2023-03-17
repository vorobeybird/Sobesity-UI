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

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, { email: string }>({
      query: (email:string) => ({
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
    checkAPI: build.mutation<{ greet: string }, any>({
      query: () => ({
        url: '/users/signin',
        method: 'POST',
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' });
        },
      },
    }),
    login: build.mutation<{ access_token: string }, { email: string; password: string }>({
      query: (credentials) => ({
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

export const { useLoginMutation, useGetUserQuery, useCheckAPIMutation } = authApi;
