import InfoCards from 'components/ui/info-cards';
import { Footer } from 'layouts/footer/Footer';
import Carousel from 'components/carousel';
import Header from './layouts/Header';

function App() {
  return (
    <div>
      <Header isLoggedIn />
      <h1 className="body-4">Sobecity</h1>
      <div className="flex flex-col justify-center align-middle">
        <Carousel interval={10000}>
          <div className="p-16 bg-black-dark ">
            <h1 className="text-2xl text-center text-secondary-light">
              Slide 0
            </h1>
          </div>
          <div className="p-16 bg-black-dark ">
            <h1 className="text-2xl text-center text-secondary-light">
              Slide 1
            </h1>
          </div>
          <div className="p-16 bg-black-dark ">
            <h1 className="text-2xl text-center text-secondary-light">
              Slide 2
            </h1>
          </div>
          <div className="p-16 bg-black-dark ">
            <h1 className="text-2xl text-center text-secondary-light">
              Slide 3
            </h1>
          </div>
        </Carousel>
        <Carousel>
          <div>
            <img
              className="object-cover w-full pointer-events-none h-60"
              src="https://images.unsplash.com/photo-1446729444801-31245ddba81a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="slide"
            />
          </div>
          <div>
            <img
              className="object-cover w-full pointer-events-none h-60"
              src="https://images.unsplash.com/photo-1422207258071-70754198c4a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=741&q=80"
              alt="slide"
            />
          </div>
          <div>
            <img
              className="object-cover w-full pointer-events-none h-60"
              src="https://images.unsplash.com/photo-1473864803180-ca1b3d93c9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
              alt="slide"
            />
          </div>
        </Carousel>
      </div>
      <InfoCards />
      <Footer />
    </div>
  );
}

export default App;
