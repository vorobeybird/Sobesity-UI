import InfoCardHeader from './InfoCardHeader';
import InfoCardContent from './InfoCardContent';

export function InfoCards(props: any) {
  const { cardType, cardHeader, cardContent, bgGradient } = props;
  const cardStyles = `sm:w-[370px] sm:min-h-[225px] sm:px-4 sm:rounded-2xl md:w-[692px] md:min-h-[380px] md:px-8  md:rounded-[2rem] ${bgGradient} from-black-light to-black-dark flex flex-col justify-center`;
  return (
    <div className={cardStyles}>
      <InfoCardHeader cardType={cardType} cardHeader={cardHeader} />
      <InfoCardContent cardType={cardType} cardContent={cardContent} />
    </div>
  );
}
