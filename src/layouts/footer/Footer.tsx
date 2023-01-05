import LanguagesLogos from 'components/shared/icons/Languages';

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:h-48 sm:p-6 md:h-72 md:px-12 bg-primary">
      <p className="font-light text-center text-white font-firaSans sm:text-base md:text-3xl sm:mb-4 md:mb-5">
        Testing a large number of languages and skills.
        <br />
        Most Popular:
      </p>
      <LanguagesLogos className="sm:w-96 md:w-9/12" />
    </div>
  );
}
