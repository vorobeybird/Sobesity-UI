import { CreateAccount } from 'components/ui/info-components/create-account';
import { Footer } from 'layouts/footer/Footer';
import Header from './layouts/Header';

function App() {
  return (
    <div className=" bg-black-dark ">
      <Header isLoggedIn />
      {/* <h1 className="body-4">Sobecity</h1> */}
      <div className="flex flex-col w-min-[370px] w-max-[1280px] items-center px-[22px] lg:px-[60px]">
        <div className="w-full py-[20px]">
          <CreateAccount />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
