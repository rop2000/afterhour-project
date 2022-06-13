import React, { PureComponent } from "react";
import { graph_data } from "../data/graph_data";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = graph_data;

export default class SalaryChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={data}>
          <text
            x={400 / 2}
            y={15}
            fill="black"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="14">Salary Distribution</tspan>
          </text>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Salary Range" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{ value: "# of People", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
