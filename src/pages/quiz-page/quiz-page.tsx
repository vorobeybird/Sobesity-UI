import { Quiz } from '@/features';
import { useGetQuestionsQuery } from '@/services/api/quiz-api';
import React from 'react';

export const QuizPage = () => {
  const { data } = useGetQuestionsQuery({
    theme: 'Python',
    level: 'junior',
  });
  console.log(data);
  return (
    <div className="w-[1100px] h-full">
      <Quiz quest={data} />
    </div>
  );
};
