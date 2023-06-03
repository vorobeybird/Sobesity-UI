import { URLS } from '@/configs/apiRouter';
import { NotFoundPage } from '@/pages';
import HomePage from '@/pages/home-page';
import { SkillPage } from '@/pages/skill-page/skill-page';
import { UserPage } from '@/pages/user-page/user-page';
import { QuizPage } from '@/pages/quiz-page/quiz-page';

type RouteType = {
  path: string;
  id: string;
  component: any;
  isAuth: boolean;
};

const HOME_PAGE: RouteType = {
  path: URLS.home_route,
  id: 'home',
  component: HomePage,
  isAuth: false,
};

const USER_PAGE: RouteType = {
  path: URLS.user_route,
  id: 'user',
  component: UserPage,
  isAuth: false,
};

const SKILL_PAGE: RouteType = {
  path: URLS.skill_route,
  id: 'skill',
  component: SkillPage,
  isAuth: false,
};

const QUIZ_PAGE: RouteType = {
  path: URLS.quiz_route,
  id: 'quiz',
  component: QuizPage,
  isAuth: false,
};

const PAGE_NOT_FOUND: RouteType = {
  path: URLS.not_found_route,
  id: 'page-not-found',
  component: NotFoundPage,
  isAuth: false,
};

export const ROUTES = [
  HOME_PAGE,
  USER_PAGE,
  SKILL_PAGE,
  PAGE_NOT_FOUND,
  QUIZ_PAGE,
];
