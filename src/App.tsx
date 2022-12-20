import { CreateAccount } from 'components/ui/info-components/create-account';
import { Footer } from 'layouts/footer/Footer';
import Header from './layouts/Header';

function App() {
  return (
    <div className="grid bg-black-dark justify-items-center">
      <Header isLoggedIn />
      {/* <h1 className="body-4">Sobecity</h1> */}
      <div className="flex flex-col w-min-[370px] w-max-[1280px] items-center px-6 lg:px-14">
        <div className="w-full py-5">
          <CreateAccount />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
