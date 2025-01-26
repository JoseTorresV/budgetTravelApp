import React, { useState } from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import { fetchCountryData } from "../components/data/api";
import SearchBar from "../components/SearchBar";
import TripStyleSelector from "../components/TripStyleSelector";
import TravelResults from "../components/TravelResults";

const HomePage: React.FC = () => {
  const [destination, setDestination] = useState<string>("");
  const [tripStyle, setTripStyle] = useState<string>("Backpack");
  const [results, setResults] = useState<{
    accommodation: string;
    food: string;
    transportation: string;
    countryInfo: {
      name: string;
      region: string;
      subregion: string;
      population: number;
      capital: string;
      currencies: string[];
      languages: string[];
      flag: string;
    };
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null);
    try {
      const countryData = await fetchCountryData(destination);

      const countryInfo = {
        name: countryData.name.common,
        region: countryData.region,
        subregion: countryData.subregion,
        population: countryData.population,
        capital: countryData.capital[0],
        currencies: Object.values(countryData.currencies).map((currency: any) => currency.name),
        languages: Object.values(countryData.languages) as string[],
        flag: countryData.flags.svg,
      };

      const mockData = {
        accommodation: tripStyle === "Luxury" ? "€200 per day" : tripStyle === "Comfort" ? "€100 per day" : "€50 per day",
        food: tripStyle === "Luxury" ? "€100 per day" : tripStyle === "Comfort" ? "€50 per day" : "€20 per day",
        transportation: tripStyle === "Luxury" ? "€50 per day" : tripStyle === "Comfort" ? "€25 per day" : "€10 per day",
        countryInfo,
      };

      setResults(mockData);
    } catch (err) {
      setError("Could not find the country. Please check the name and try again.");
    }

    console.log("Selected Trip Style:", tripStyle);
  };

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Plan your trip
      </Heading>
      <SearchBar
        destination={destination}
        setDestination={setDestination}
        onSearch={handleSearch}
      />
      <TripStyleSelector style={tripStyle} setStyle={setTripStyle} />
      {error && <Text color="red.500">{error}</Text>}
      <TravelResults results={results} />
    </Container>
  );
};

export default HomePage;
