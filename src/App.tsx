import Header from './layouts/Header';
import { Footer } from './layouts/footer/Footer';
import Routing from './routing/routing';

function App() {
  const isLoggedIn = false;

  return (
    <div className="grid min-h-screen grid-cols-1 gap-y-10 lg:gap-0 justify-items-center bg-black-dark">
      <header className="flex w-full h-full col-span-5 pt-10 lg:pt-0">
        <Header isLoggedIn={isLoggedIn} />
      </header>
      <div className="min-h-screen">
        <Routing />
      </div>
      <footer className="flex items-end w-full col-span-5 ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
