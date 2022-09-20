
import FlagCard from '../FlagCard/FlagCard';
import { getCountries } from '../../services/countries';

export default function Main() {
  const [flags, setFlags] = useState([]);
  return (
    <div>
      {flags.map((flag) => {
        return <FlagCard key={flag.name} {...flag} />;
      })}
    </div>
  );
}
