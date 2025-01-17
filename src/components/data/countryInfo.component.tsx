import React, { useState } from 'react';
import axios from 'axios';
import { Country } from '../../interfaces/country.interface';

const CountryInfo: React.FC = () => {
    const [countryName, setCountryName] = useState<string>('Italy'); // Country name
    const [countryData, setCountryData] = useState<Country | null>(null); // Country info
    const [error, setError] = useState<string | null>(null); // error

    const fetchCountryData = async () => {
        try {
            setError(null);
            const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/name/${countryName}`);
            setCountryData(response.data[0]); // Take the first result
        } catch (error) {
            setError('Country info not found')
        }
    };

    return (
        <div>
            <h2>Country info</h2>
            <input
                type="text"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Insert a country"
            />
            <button onClick={fetchCountryData}>Search</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {countryData && (
                <div>
                    <h3>{countryData.name.common}</h3>
                    <p>Region: {countryData.region}</p>
                    <p>Population: {countryData.population.toLocaleString()}</p>
                    <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} width="100" />
                </div>
            )}
        </div>
    );
};

export default CountryInfo;