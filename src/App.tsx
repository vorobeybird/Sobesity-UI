import { infoCardsContent } from 'assets/textContent/infoCardsContent';
import { Footer } from 'layouts/footer/Footer';
import Header from './layouts/Header';
import InfoCards from './components/ui/InfoCards';

function App() {
  return (
    <div>
      <Header isLoggedIn />
      <h1 className="body-4">Sobecity</h1>
      <InfoCards
        cardType={infoCardsContent[0].cardType}
        cardHeader={infoCardsContent[0].header}
        cardContent={infoCardsContent[0].content}
        bgGradient={infoCardsContent[0].bgGradient}
      />
      <Footer />
    </div>
  );
}

export default App;
