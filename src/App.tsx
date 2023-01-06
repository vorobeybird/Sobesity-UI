import { CreateAccount } from 'components/ui/info-components/create-account';
import FindInterviewer from 'components/ui/info-components/find-interviewer';
import { Footer } from 'layouts/footer/Footer';
import { useAppDispatch } from 'hooks';
import { getAllCategories } from 'store/question.store';
import Header from './layouts/Header';

function App() {
  const dispatch = useAppDispatch();

  dispatch(getAllCategories());

  return (
    <div className="grid bg-black-dark justify-items-center">
      <Header isLoggedIn />
      {/* <h1 className="body-4">Sobecity</h1> */}
      <div className="flex flex-col w-min-[370px] w-max-[1280px] items-center px-6 lg:px-14">
        <div className="w-full py-5">
          <CreateAccount />
          <FindInterviewer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
