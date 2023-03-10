import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { questionService } from '@/services/api/question.service';

export type QuestionCategory = {
  id: number;
  name: string;
  questions: Question[];
};

export type Question = {
  question: string;
  answers: string[];
  correctAnswerId: number;
};

export interface QuestionsState {
  entities: QuestionCategory[] | [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: QuestionsState = {
  entities: [],
  loading: 'idle',
};

export const getCategoryQuestions = createAsyncThunk(
  'questions/get',
  async (category: QuestionCategory) => {
    const { data } = await questionService.getCategoryQuestions(category);

    return data;
  },
);

export const getAllCategories = createAsyncThunk(
  'questions/getAll',
  async () => {
    const { data } = await questionService.getAllCategories();

    return data;
  },
);

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
      // just example not dealing with the types or assigning
      // eslint-disable-next-line no-param-reassign
      state.entities[1].questions = payload[1].questions;
    });
    builder.addCase(getCategoryQuestions.fulfilled, (state, { payload }) => {
      // just example not dealing with the types or assigning
      // eslint-disable-next-line no-param-reassign
      state.entities[1].questions = payload;
    });
  },
});

export const { reducer: questionReducer } = questionSlice;
