import React from "react";
import { Input, Button, Flex } from "@chakra-ui/react";

interface SearchBarProps {
  destination: string;
  setDestination: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ destination, setDestination, onSearch }) => {
  return (
    <Flex gap={4} my={4}>
      <Input
        placeholder="Enter a country (e.g. Italy)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Button colorScheme="blue" onClick={onSearch}>
        Cerca
      </Button>
    </Flex>
  );
};

export default SearchBar;
