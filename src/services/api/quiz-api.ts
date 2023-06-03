import { retry } from '@reduxjs/toolkit/query/react';

import { api } from './api';
import { URLS } from '@/configs/apiRouter';

export const quizApi = api.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<any, any>({
      query: (arg) => {
        const { theme, level } = arg;
        return {
          url: `${URLS.define_knowledge}/generate_questions`,
          method: 'GET',
          params: { theme, level },
        };
      },
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: 'error' });
        },
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = quizApi;
