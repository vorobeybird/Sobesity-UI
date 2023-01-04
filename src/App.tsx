import { CreateAccount } from 'components/ui/info-components/create-account';
import TimeSlot from 'components/ui/info-components/time-slot';
import { Footer } from 'layouts/footer/Footer';
import { useAppDispatch } from 'hooks';
import { getAllCategories } from 'store/question.store';
import { AuthForm } from 'components/auth-form';
import { FormType } from 'components/auth-form/auth-form.types';
import Header from './layouts/Header';

function App() {
  const dispatch = useAppDispatch();

  dispatch(getAllCategories());

  return (
    <div className="grid bg-black-dark justify-items-center">
      <Header isLoggedIn />
      {/* <h1 className="body-4">Sobecity</h1> */}
      <div className="flex flex-col w-min-[370px] w-max-[1280px] items-center px-6 lg:px-14">
        <div className="w-full py-5 text-primary-dark">
          <CreateAccount />
          <TimeSlot />
        </div>
      </div>
      <AuthForm type={FormType.SignUp} action={() => {}} />
      <Footer />
    </div>
  );
}

export default App;
