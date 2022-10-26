import Footer from './layouts/Footer';
import Header from './layouts/Header';

function App() {
  return (
    <div>
      <Header isLoggedIn={true} />
      <h1 className="text-3xl font-bold underline">Sobecity</h1>
      <Footer />
    </div>
  );
}

export default App;
