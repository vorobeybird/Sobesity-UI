import { Footer } from 'layouts/footer/footer';
import Header from './layouts/header';

function App() {
  return (
    <div>
      <Header isLoggedIn />
      <h1 className="body-4">Sobecity</h1>
      <Footer />
    </div>
  );
}

export default App;
