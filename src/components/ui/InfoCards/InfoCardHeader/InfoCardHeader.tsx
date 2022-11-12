export function InfoCardHeader(props: any) {
  const { cardHeader, cardType } = props;
  const headerColor = () => {
    if (cardType === 'list') {
      return 'text-white';
    }
    return 'text-[#7b2224] sm:w-[153px] md:w-[300px]';
  };

  const headerStyles = `font-oswald font-medium sm:text-[20px] md:text-[40px] leading-[120.9%] sm:pb-2.5 md:pb-5 ${headerColor()}`;

  return <div className={headerStyles}>{cardHeader}</div>;
}
