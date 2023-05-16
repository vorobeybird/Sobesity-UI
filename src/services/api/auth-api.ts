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

export interface LoginGeneric {
  ResultType: { access_token: string };
  QueryArg: { email: string; password: string };
}

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
    register: build.mutation<void, User>({
      query: (data: User) => ({
        url: 'user',
        method: 'POST',
        body: data,
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' });
        },
      },
    }),
    login: build.mutation<LoginGeneric['ResultType'], LoginGeneric['QueryArg']>(
      {
        query: (credentials) => ({
          url: 'user/login',
          method: 'POST',
          body: credentials,
        }),
        extraOptions: {
          backoff: () => {
            retry.fail({ fake: 'error' });
          },
        },
      },
    ),
  }),
});

export const { useLoginMutation, useGetUserQuery, useRegisterMutation } =
  authApi;
