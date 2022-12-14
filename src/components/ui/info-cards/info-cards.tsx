import { infoCardsContent } from 'assets/text-content/info-cards-content';
import InfoCard from './info-card';

export function InfoCards() {
  const currentInfoCardList = [
    infoCardsContent[0],
    infoCardsContent[1],
    infoCardsContent[2],
    infoCardsContent[3],
  ];

  return (
    <div>
      {currentInfoCardList.map((elem, index) => {
        return (
          <InfoCard
            cardType={elem.cardType}
            cardHeader={elem.header}
            cardContent={elem.content}
            isOdd={Boolean(index % 2)}
            key={elem.id}
          />
        );
      })}
    </div>
  );
}
