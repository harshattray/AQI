/**
 * @file useGraphData.ts
 * A custom hook to transform the data from the OpenAQ API to a format that can be used by the graph.
 * The hook returns the data and the key for the x-axis.
 * The hook is used in the App component.
 * 
 */

import { useState, useEffect } from "react";
import moment from "moment";

interface GraphData {
  date: string;
  [key: string]: any;
}

interface Measurement {
  city: string;
  value: number;
  unit: string;
  date: { local: string };
  parameter: string;
  location: string;
}

export const useGraphData = (data: Measurement[]) => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [xAxisKey] = useState<string>("location");

  useEffect(() => {
    setGraphData(
      data.map((item) => ({
        location: item.location,
        [item.parameter]: item.value,
        date: moment(item.date.local).format("DD-MM-YYYY HH:mm:ss"),
      }))
    );
  }, [data]);

  return { graphData, xAxisKey };
};