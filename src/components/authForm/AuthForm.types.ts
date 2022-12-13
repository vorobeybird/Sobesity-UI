export const enum FormType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type FormProps = {
  type: FormType;
  action: () => void;
};
