/**
 * @file ParameterGraphComponent.tsx
 *  Component for rendering a graph of a parameter.
 * Uses the recharts library.
 *  The data is passed in as a prop and is filtered by city and parameter.
 *  The parameter is also passed in as a prop.
 *  The width and height of the graph can be passed in as props.
 *  If no width or height is passed in, the default is 500px x 400px.
 *  The graph is responsive and will resize to fit the container.
 *  The graph is rendered using the useGraphData hook.
 *  The hook returns the data in the format required by the recharts library.
 *  The hook also returns the key for the x-axis.
 *  The x-axis key is either "date" or "location" depending on the data.
 *  The data is formatted using the formatGraphData function.
 *  The formatGraphData function is called in the useGraphData hook.
 * The formatGraphData function returns the data in the format required by the recharts library.
 */

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { GraphContainer } from "./ParameterGraphComponent.css";
import { useGraphData } from "../../hooks/useGraphData/useGraphData";


interface Props {
  data: any;
  parameter: string;
  width?: number;
  height?: number;
}

const ParameterGraph: React.FC<Props> = ({ data, parameter, width = 500, height = 400  }) => {
  const { graphData, xAxisKey } = useGraphData(data);

  return (
    <GraphContainer style={{ width: width, height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={window.innerWidth < 500 ? window.innerWidth - 200 : 500}
          height={400}
          data={graphData}
        >
        <img src="" alt="My Line Chart" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={parameter} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default ParameterGraph;
