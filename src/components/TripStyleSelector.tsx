import React from "react";
import { Button, HStack } from "@chakra-ui/react";

interface TripStyleSelectorProps {
  style: string;
  setStyle: (value: string) => void;
}
// spacing={4}
const TripStyleSelector: React.FC<TripStyleSelectorProps> = ({ style, setStyle }) => {
  return (
    <HStack my={4}>
      <Button
        colorScheme={style === "zaino" ? "blue" : "gray"}
        onClick={() => setStyle("zaino")}
      >
        Zaino
      </Button>
      <Button
        colorScheme={style === "comfort" ? "blue" : "gray"}
        onClick={() => setStyle("comfort")}
      >
        Comfort
      </Button>
      <Button
        colorScheme={style === "lusso" ? "blue" : "gray"}
        onClick={() => setStyle("lusso")}
      >
        Lusso
      </Button>
    </HStack>
  );
};

export default TripStyleSelector;
