import { AxiosResponse } from 'axios';
import { apiClient } from './client';

type User = {
  id: number;
  name: string;
  // ...
};

interface AuthService {
  isLoggedIn: boolean;
  getCurrentUser(): User | undefined;
  login(user: User): Promise<AxiosResponse>;
  logout(): Promise<AxiosResponse>;
  register(user: User): Promise<AxiosResponse>;
}

const authService: AuthService = {
  isLoggedIn: false,
  getCurrentUser() {
    // todo
    let user;

    return user;
  },
  login(user) {
    return apiClient.post('users/login', { user });
  },
  logout() {
    return apiClient.post('users/logout');
  },
  register(user) {
    return apiClient.post('users/register', { user });
  },
};

export { authService };
