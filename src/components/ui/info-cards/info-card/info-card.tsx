import InfoCardHeader from './info-card-header';
import InfoCardContent from './info-card-content';
import './info-card.css';

export function InfoCard(props: any) {
  const { cardType, cardHeader, cardContent, isOdd } = props;
  const cardStyles = `info-card ${
    isOdd ? 'info-card-gradient-left' : 'info-card-gradient-right'
  }`;
  return (
    <div className={cardStyles}>
      <InfoCardHeader cardType={cardType} cardHeader={cardHeader} />
      <InfoCardContent cardType={cardType} cardContent={cardContent} />
    </div>
  );
}
