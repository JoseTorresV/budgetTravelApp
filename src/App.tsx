import React, { useState } from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import { fetchCountryData } from "./components/data/api";
import SearchBar from "./components/SearchBar";
import TripStyleSelector from "./components/TripStyleSelector";
import TravelResults from "./components/TravelResults";


const App: React.FC = () => {
  const [destination, setDestination] = useState<string>("");
  const [tripStyle, setTripStyle] = useState<string>("Backpack");
  const [results, setResults] = useState<{
    accommodation: string;
    food: string;
    transportation: string;
    countryInfo?: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null); // Reset dell'errore
    try {
      // Recupera i dati del paese
      const countryData = await fetchCountryData(destination);

      const mockData = {
        accommodation: tripStyle === "luxury" ? "€200 per day" : "€50 per day",
        food: tripStyle === "luxury" ? "€100 per day" : "€20 per day",
        transportation: tripStyle === "luxury" ? "€50 per day" : "€10 per day",
        countryInfo: `${countryData[0].name.common} - : ${countryData[0].region}`,
      };

      setResults(mockData);
    } catch (err) {
      setError("Could not find the country. Please check the name and try again.");
    }
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

export default App;
