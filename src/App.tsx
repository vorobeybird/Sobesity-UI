import Input from 'components/shared/inputs/input';
import Lock from 'components/shared/icons/Lock';
import Envelope from 'components/shared/icons/Envelope';
import { Footer } from 'layouts/footer/Footer';
import Header from './layouts/Header';

function App() {
  return (
    <div>
      <Header isLoggedIn />
      <h1 className="body-4">Sobecity</h1>
      <div className="bg-black-dark p-5">
        <Input
          className="w-[300px] h-[40px] xl:w-[500px] xl:h-[48px]"
          icon={<Lock />}
          error="opps wrong happened"
          placeholder="email"
        />
        <Input
          className="w-[300px] h-[40px] xl:w-[500px] xl:h-[48px]"
          icon={<Envelope />}
          placeholder="email"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
