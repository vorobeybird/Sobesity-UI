import './info-card-content.css';

export function InfoCardContent(props: any) {
  const { cardContent, cardType } = props;

  return (
    <div className="info-card-content-wrapper">
      {cardType === 'list' ? (
        cardContent.map((elem: any) => {
          return (
            <div className="info-card-content-items">
              <div className="info-card-content-item">
                <span className="info-card-content-item-dash" />
              </div>
              <div>{elem}</div>
            </div>
          );
        })
      ) : (
        <div>{cardContent}</div>
      )}
    </div>
  );
}
