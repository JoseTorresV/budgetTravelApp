import React from "react";
import { Button, HStack } from "@chakra-ui/react";

interface TripStyleSelectorProps {
  style: string;
  setStyle: (value: string) => void;
}

const TripStyleSelector: React.FC<TripStyleSelectorProps> = ({ style, setStyle }) => {
  return (
    <HStack spacing={4} my={4} {...({} as any)}>
      <Button
        bg={style === "Backpack" ? "blue.500" : "gray.200"}
        color={style === "Backpack" ? "white" : "black"}
        _hover={{ bg: style === "Backpack" ? "blue.600" : "gray.300" }}
        _active={{ bg: style === "Backpack" ? "blue.700" : "gray.400" }}
        onClick={() => setStyle("Backpack")}
      >
        Zaino
      </Button>
      <Button
        bg={style === "Comfort" ? "blue.500" : "gray.200"}
        color={style === "Comfort" ? "white" : "black"}
        _hover={{ bg: style === "Comfort" ? "blue.600" : "gray.300" }}
        _active={{ bg: style === "Comfort" ? "blue.700" : "gray.400" }}
        onClick={() => setStyle("Comfort")}
      >
        Comfort
      </Button>
      <Button
        bg={style === "Luxury" ? "blue.500" : "gray.200"}
        color={style === "Luxury" ? "white" : "black"}
        _hover={{ bg: style === "Luxury" ? "blue.600" : "gray.300" }}
        _active={{ bg: style === "Luxury" ? "blue.700" : "gray.400" }}
        onClick={() => setStyle("Luxury")}
      >
        Lusso
      </Button>
    </HStack>
  );
};

export default TripStyleSelector;
