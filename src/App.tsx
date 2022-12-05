import InfoCards from 'components/ui/info-cards';
import { Footer } from 'layouts/footer/Footer';
import Header from './layouts/header';

function App() {
  return (
    <div>
      <Header isLoggedIn />
      <h1 className="body-4">Sobecity</h1>
      <InfoCards />
      <Footer />
    </div>
  );
}

export default App;
