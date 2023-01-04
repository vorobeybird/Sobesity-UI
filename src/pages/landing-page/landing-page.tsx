import Header from 'layouts/Header';
import { Footer } from 'layouts/footer/Footer';
import { CreateAccount } from 'components/ui/info-components/create-account';
import InfoCards from 'components/ui/info-cards';

export const LandingPage = () => {
  const isLoggedIn = true;

  return (
    <div className="grid min-h-screen grid-cols-1 justify-items-center">
      <div className="w-full col-span-5">
        <Header isLoggedIn={isLoggedIn} />
      </div>
      <main className="col-span-3 py-20">
        {/* main content goes here */}
        <CreateAccount />
        <InfoCards />
      </main>
      <div className="flex items-end w-full col-span-5 ">
        <Footer />
      </div>
    </div>
  );
};
