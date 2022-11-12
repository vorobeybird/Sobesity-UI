export function InfoCardContentTypeList(props: any) {
  const { cardContent } = props;
  return (
    <div className="flex flex-row">
      <div className="flex items-center sm:pl-7 sm:pr-2.5">
        <span className="sm:w-4 sm:h-px bg-white" />
      </div>
      <div>{cardContent}</div>
    </div>
  );
}
