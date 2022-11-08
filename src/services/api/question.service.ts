import { AxiosResponse } from 'axios';
import { apiClient } from './client';

type QuestionCategory = {
  id: number;
  name: string;
};

type Question = {
  question: string;
  answers: string[];
  correctAnswerId: number;
};

interface QuestionService {
  getAllCategories(): Promise<AxiosResponse<QuestionCategory[]>>;
  getCategoryQuestions(
    category: QuestionCategory,
  ): Promise<AxiosResponse<Question[]>>;
}

const questionService: QuestionService = {
  getAllCategories() {
    return apiClient.get('categories');
  },
  getCategoryQuestions(category) {
    return apiClient.get(`categories/${category.id}`);
  },
};

export { questionService };
