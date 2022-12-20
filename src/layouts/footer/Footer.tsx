import LanguagesLogos from 'components/shared/icons/Languages';

export function Footer() {
  return (
    <div className="w-max-full sm:h-48 sm:p-6 md:h-72 md:px-12 bg-primary flex flex-col justify-center items-center">
      <p className="font-firaSans font-light sm:text-base md:text-3xl text-white text-center sm:mb-4 md:mb-5">
        Testing a large number of languages and skills.
        <br />
        Most Popular:
      </p>
      <LanguagesLogos className="sm:w-96 md:w-9/12" />
    </div>
  );
}
