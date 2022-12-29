export const enum FormType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export interface FormProps {
  /**
   * What kind of form to use
   */
  type: FormType;
  action: () => void;
}
