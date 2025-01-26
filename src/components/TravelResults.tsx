import React from "react";
import { Box, Text, VStack, Image } from "@chakra-ui/react";

// Tipo delle proprietà del componente
interface TravelResultsProps {
  results: {
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
  } | null;
}

const TravelResults: React.FC<TravelResultsProps> = ({ results }) => {
  if (!results) {
    return <Text my={4}>Cerca una destinazione per visualizzare i risultati.</Text>;
  }

  return (
    <Box border="1px" borderRadius="md" p={4} my={4}>
      <VStack align="start" spacing={4} {...({} as any)}>
        <Text fontWeight="bold">Costi Stimati:</Text>
        <Text>Alloggio: {results.accommodation}</Text>
        <Text>Pasti: {results.food}</Text>
        <Text>Trasporti: {results.transportation}</Text>

        <Text fontWeight="bold" mt={4}>Informazioni sul Paese:</Text>
        <Text>Nome: {results.countryInfo.name}</Text>
        <Text>Regione: {results.countryInfo.region}</Text>
        <Text>Sottoregione: {results.countryInfo.subregion}</Text>
        <Text>Popolazione: {results.countryInfo.population.toLocaleString()}</Text>
        <Text>Capitale: {results.countryInfo.capital}</Text>
        <Text>Valuta: {results.countryInfo.currencies.join(", ")}</Text>
        <Text>Lingue: {results.countryInfo.languages.join(", ")}</Text>
        <Image
          src={results.countryInfo.flag}
          alt={`Bandiera di ${results.countryInfo.name}`}
          width="100px"
        />
      </VStack>
    </Box>
  );
};

export default TravelResults;
