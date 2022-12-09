import InfoCards from 'components/ui/info-cards';
import { Footer } from 'layouts/footer/Footer';
import Carousel from 'components/carousel';
import Header from './layouts/Header';

function App() {
  return (
    <div>
      <Header isLoggedIn />
      <h1 className="body-4">Sobecity</h1>
      <div className="flex flex-col align-middle justify-center">
        <Carousel interval={1500000} transitionTime={500}>
          <div className="text-container">
            <h1>Slide 0</h1>
          </div>
          <div className="text-container">
            <h1>Slide 1</h1>
          </div>
          <div className="text-container">
            <h1>Slide 2</h1>
          </div>
          <div className="text-container">
            <h1>Slide 3</h1>
          </div>
          <div className="text-container">
            <h1>Slide 4</h1>
          </div>
        </Carousel>
      </div>

      <InfoCards />
      <Footer />
    </div>
  );
}

export default App;
