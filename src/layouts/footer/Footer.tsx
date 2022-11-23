import languagesLogos from '../../assets/icons/languages.svg';
import './footer.css';

export function Footer() {
  return (
    <div className="footer">
      <p>
        Testing a large number of languages and skills.
        <br />
        Most Popular:
      </p>
      <img src={languagesLogos} alt="languages logos" />
    </div>
  );
}
