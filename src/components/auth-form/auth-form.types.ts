export const enum FormType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export interface IUserLogIn {
  email: string;
  password: string;
}

export interface IUserRegistration {
  email: string;
  nickname: string;
  password: string;
  policy: string;
  firstName: string;
  lastName: string;
}

export interface FormProps {
  /**
   * What kind of form to use
   */
  type: FormType;
}
