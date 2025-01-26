import React from "react";
import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";

const FormPage: React.FC = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Form
      </Text>
      <VStack spacing={4} {...({} as any)}>
        <Input placeholder="Inserisci il tuo nome" />
        <Input placeholder="Inserisci la tua email" type="email" />
        <Button colorScheme="blue">Invia</Button>
      </VStack>
    </Box>
  );
};

export default FormPage;
