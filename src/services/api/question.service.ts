import { AxiosResponse } from 'axios';
import { Question, QuestionCategory } from 'store/question.store';
import { apiClient } from './client';

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
