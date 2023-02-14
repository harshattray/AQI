/**
 * @file useDataFetching.ts
 *  A custom hook to fetch data from the OpenAQ API.
 * The hook returns the data, a list of cities and a list of parameters.
 * The hook is used in the App component.
 */
import axios from "axios";
import  { useEffect, useState } from "react";

interface Measurement {
    city: string;
    value: number;
    unit: string;
    date: { local: string };
    parameter: string;
    location: string;
  }
  
  export const useDataFetching = (): [Measurement[], string[], string[]] => {
    const [data, setData] = useState<Measurement[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [parameters, setParameters] = useState<string[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          "https://api.openaq.org/v1/measurements?country_id=DE"
        );
        setData(result?.data?.results);
        setCities([
          ...new Set(result?.data?.results?.map((m) => m.city) as string[]),
        ]);
        setParameters([
          ...new Set(result?.data?.results?.map((m) => m.parameter) as string[]),
        ]);
      };
      fetchData();
    }, []);
  
    return [data, cities, parameters];
  };