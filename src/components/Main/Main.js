
import FlagCard from '../FlagCard/FlagCard';
import { getCountries } from '../../services/countries';

export default function Main() {
  const countries = getCountries();
  return (
    <main>
      <h2>Heh, check it</h2>
      <div>
        {countries.map((country) => (
          <FlagCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
