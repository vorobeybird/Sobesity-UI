// import InfoCards from 'components/ui/info-cards';

// import Carousel from 'components/carousel';
import { CreateAccount } from 'components/ui/info-components/create-account';
import { Footer } from 'layouts/footer/Footer';
import Header from './layouts/Header';

function App() {
  return (
    <div className="grid grid-rows-6 bg-black-dark ">
      <Header isLoggedIn />
      {/* <h1 className="body-4">Sobecity</h1> */}
      <div className="row-span-4 flex flex-col items-center px-5">
        <div className="w-full bg-primary-light ">
          <CreateAccount />
        </div>
      </div>
      {/* <div className="flex flex-col align-middle justify-center">
        <Carousel interval={10000}>
          <div className="bg-black-dark p-16 ">
            <h1 className="text-center text-secondary-light text-2xl">
              Slide 0
            </h1>
          </div>
          <div className="bg-black-dark p-16 ">
            <h1 className="text-center text-secondary-light text-2xl">
              Slide 1
            </h1>
          </div>
          <div className="bg-black-dark p-16 ">
            <h1 className="text-center text-secondary-light text-2xl">
              Slide 2
            </h1>
          </div>
          <div className="bg-black-dark p-16 ">
            <h1 className="text-center text-secondary-light text-2xl">
              Slide 3
            </h1>
          </div>
        </Carousel>
        <Carousel>
          <div>
            <img
              className="w-full h-60 object-cover pointer-events-none"
              src="https://images.unsplash.com/photo-1446729444801-31245ddba81a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="slide"
            />
          </div>
          <div>
            <img
              className="w-full h-60 object-cover pointer-events-none"
              src="https://images.unsplash.com/photo-1422207258071-70754198c4a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=741&q=80"
              alt="slide"
            />
          </div>
          <div>
            <img
              className="w-full h-60 object-cover pointer-events-none"
              src="https://images.unsplash.com/photo-1473864803180-ca1b3d93c9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
              alt="slide"
            />
          </div>
        </Carousel>
        <InfoCards />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
