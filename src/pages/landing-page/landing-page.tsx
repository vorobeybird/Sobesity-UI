import Header from 'layouts/Header';
import { Footer } from 'layouts/footer/Footer';
import { CreateAccount } from 'components/ui/info-components/create-account';
import InfoCards from 'components/ui/info-cards';

export const LandingPage = () => {
  const isLoggedIn = true;

  return (
    <div className="grid min-h-screen grid-cols-1 justify-items-center">
      <header className="w-full col-span-5">
        <Header isLoggedIn={isLoggedIn} />
      </header>
      <main className="col-span-3 py-10 max-w-[1280px]">
        <div className="px-5 md:px-10">
          <CreateAccount />
          <InfoCards />
        </div>
      </main>
      <footer className="flex items-end w-full col-span-5 ">
        <Footer />
      </footer>
    </div>
  );
};
