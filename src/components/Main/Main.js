
import FlagCard from '../FlagCard/FlagCard';
import useCountries from '../../hooks/useCountries';
import Filter from '../Filter/Filter';

export default function Main() {
  const { filterCountries, setContinent, continent, error } = useCountries();
  return (
    <main>
      <p>{error}</p>
      <h2>Heh, check it</h2>
      <Filter setContinent={setContinent} continent={continent} />
      <div>
        {filterCountries().map((country) => (
          <FlagCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
