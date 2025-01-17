
// Definizione dei tipi di dati restituiti dall'API
export interface Country {
    name: {
      common: string;
    };
    region: string;
    population: number;
    flags: {
      svg: string;
    };
  }