import { Footer } from 'layouts/footer/Footer';
import Button from 'components/shared/buttons';
import Header from './layouts/Header';

function App() {
  return (
    <div>
      <Header isLoggedIn />
      <h1 className="text-3xl font-bold underline">Sobecity</h1>
      <div className="bg-black-dark w-full h-44 flex items-center justify-center">
        <div className="w-52">
          <Button buttonType="button-2" key={4342423}>
            NAME
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
