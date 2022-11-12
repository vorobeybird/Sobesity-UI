import InfoCardContentTypeList from './InfoCardContentTypeList';
import InfoCardContentTypeText from './InfoCardContentTypeText';

export function InfoCardContent(props: any) {
  const { cardContent, cardType } = props;

  return (
    <div className="font-firaSans font-light sm:text-[16px] md:text-[28px] leading-[142.9%] text-white">
      {cardType === 'list' ? (
        cardContent.map((elem: any) => {
          return <InfoCardContentTypeList cardContent={elem} />;
        })
      ) : (
        <InfoCardContentTypeText cardContent={cardContent} />
      )}
    </div>
  );
}
