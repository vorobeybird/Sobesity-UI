import { Quiz } from '@/features';
import { useGetQuestionsQuery } from '@/services/api/quiz-api';
import React from 'react';
import { useParams } from 'react-router-dom';

export const QuizPage = () => {
  const rpams = useParams();
  console.log(rpams);
  const { data, isLoading } = useGetQuestionsQuery({
    theme: rpams.theme,
    level: rpams.level,
  });
  return (
    <div className="w-[1100px] h-full">
      {isLoading ? <div className="">Loading</div> : <Quiz quest={data} />}
    </div>
  );
};
