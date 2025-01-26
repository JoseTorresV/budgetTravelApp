import React from "react";
import { Box, Text } from "@chakra-ui/react";

const MapPage: React.FC = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Mappa
      </Text>
      {/* Qui puoi integrare una mappa come Leaflet o Google Maps */}
      <Box border="1px" borderRadius="md" bg="gray.100" height="400px" display="flex" justifyContent="center" alignItems="center">
        <Text>Qui verrà mostrata una mappa</Text>
      </Box>
    </Box>
  );
};

export default MapPage;
