import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const fetchCountryData = async (countryName: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/name/${countryName}`);
    return response.data[0]; // Restituisce il primo risultato
  } catch (error) {
    console.error("Errore nella chiamata API:", error);
    throw new Error("Impossibile trovare il paese.");
  }
};
