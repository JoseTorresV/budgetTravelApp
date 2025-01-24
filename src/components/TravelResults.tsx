import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

interface TravelResultsProps {
  results: {
    accommodation: string;
    food: string;
    transportation: string;
  } | null;
}

const TravelResults: React.FC<TravelResultsProps> = ({ results }) => {
  if (!results) {
    return <Text my={4}>Search for a destination to view results.</Text>;
  }

  return (
    <Box border="1px" borderRadius="md" p={4} my={4}>
      <VStack align="start" spacing={2} {...({} as any)}>
        <Text fontWeight="bold">Estimated Costs:</Text>
        <Text>Accommodation: {results.accommodation || "N/A"}</Text>
        <Text>Meals: {results.food || "N/A"}</Text>
        <Text>Transport: {results.transportation || "N/A"}</Text>
      </VStack>
    </Box>
  );
};

export default TravelResults;
