import LanguagesLogos from 'components/shared/icons/Languages';

export function Footer() {
  return (
    <div className="flex flex-col w-full pb-10">
      <p className="px-10 font-light text-left text-white font-firaSans sm:text-base md:text-3xl sm:mb-4 md:mb-5">
        Testing a large number of languages and skills:
      </p>
      <LanguagesLogos className="w-full h-16 md:h-24 lg:h-32" />
    </div>
  );
}
