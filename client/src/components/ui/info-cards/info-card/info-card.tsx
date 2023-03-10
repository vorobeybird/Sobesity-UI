import classNames from 'classnames';

import InfoCardHeader from './info-card-header';
import InfoCardContent from './info-card-content';

export function InfoCard(props: any) {
  const { cardType, cardHeader, cardContent, isOdd } = props;

  return (
    <div
      className={classNames(
        'w-full h-[225px] px-4 rounded-2xl from-black-light to-black-dark flex flex-col justify-center',
        'md:w-[692px] md:min-h-[380px] md:px-8 md:rounded-[2rem]',
        { 'bg-gradient-to-bl': isOdd },
        { 'bg-gradient-to-br': !isOdd },
      )}
    >
      <InfoCardHeader cardType={cardType} cardHeader={cardHeader} />
      <InfoCardContent cardType={cardType} cardContent={cardContent} />
    </div>
  );
}
