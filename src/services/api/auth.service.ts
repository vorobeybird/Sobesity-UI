import { AxiosResponse } from 'axios';
import {
  IUserLogIn,
  IUserRegistration,
} from 'components/auth-form/auth-form.types';
import { apiClient } from './client';

type User = {
  id: number;
  name: string;
  // ...
};

interface AuthService {
  isLoggedIn: boolean;
  getCurrentUser(): User | undefined;
  login(user: IUserLogIn): Promise<AxiosResponse>;
  logout(): Promise<AxiosResponse>;
  register(user: IUserRegistration): Promise<AxiosResponse>;
}

const authService: AuthService = {
  isLoggedIn: false,
  getCurrentUser() {
    // todo
    let user;

    return user;
  },
  login(user) {
    return apiClient.post('user/login', { user });
  },
  logout() {
    return apiClient.post('users/logout');
  },
  register(user) {
    return apiClient.post('user', { user });
  },
};

export { authService };
