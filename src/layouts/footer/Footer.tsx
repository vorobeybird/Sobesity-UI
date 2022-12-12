import languagesLogos from '../../assets/icons/languages.svg';

export function Footer() {
  return (
    <div className="w-full sm:h-48 bg-primary bg-cover flex flex-col justify-center items-center sm:p-4">
      <p className="font-firaSans font-light sm:text-base text-white text-center sm:mb-4">
        Testing a large number of languages and skills.
        <br />
        Most Popular:
      </p>
      <img src={languagesLogos} alt="languages logos" className="sm:w-96" />
    </div>
  );
}
