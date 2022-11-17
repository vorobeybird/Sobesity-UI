import './info-card-header.css';

export function InfoCardHeader(props: any) {
  const { cardHeader, cardType } = props;
  const headerColor = () => {
    if (cardType === 'list') {
      return 'info-card-header-white';
    }
    return 'info-card-header-bloody';
  };

  const headerStyles = `info-card-header ${headerColor()}`;

  return <div className={headerStyles}>{cardHeader}</div>;
}
