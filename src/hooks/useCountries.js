import { getCountries } from '../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (e) {
        setError("Oh no, Something went very very wrong here. Bad programmer! Jk, you are precious. Let's fix it =^. ^=");
      }
    }
    fetchData();
    
  }, []);

  const filterCountries = () => {
    if (continent === 'all') return countries;
    return countries.filter((country) => country.continent === continent);
  };
  return { filterCountries, continent, setContinent };
}
