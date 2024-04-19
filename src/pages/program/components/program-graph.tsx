import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Program A',
    Time:" '12' Month",
    Budget: 1400000,
  },
  {
    name: 'Program B',
    Time:" '12' Month",
    Budget: 1398000,
  },
  {
    name: 'Program C',
    Time:" '12' Month",
    Budget: "121 laptops",
  },
  {
    name: 'Program D',
    Time:" '12' Month",
    Budget: 1210000,
  },
  {
    name: 'Program A',
    Time:" '12' Month",
    Budget: 1400000,
  },
  {
    name: 'Program B',
    Time:" '12' Month",
    Budget: 23543,
  },
  {
    name: 'Program B',
    Time:" '12' Month",
    Budget: 65445,
  },
  {
    name: 'Program B',
    Time:" '12' Month",
    Budget: 1398000,
  },
  {
    name: 'Program B',
    Time:" '12' Month",
    Budget: 1398000,
  },
  {
    name: 'Program C',
    Time:" '12' Month",
    Budget: 1865000,
  },
  {
    name: 'Program D',
    Time:" '12' Month",
    Budget: 1210000,
  },
  {
    name: 'Program A',
    Time:" '12' Month",
    Budget: 1400000,
  },
  {
    name: 'Program B',
    Time:" '12' Month",
    Budget: 1398000,
  },
  {
    name: 'Program C',
    Time:" '12' Month",
    Budget: 1865000,
  },
  {
    name: 'Program D',
    Time:" '12' Month",
    Budget: 1210000,
  },
];

export default class ProgramGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      // <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={1050}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Budget" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Time" stroke="#82ca9d" />
        </LineChart>
      // </ResponsiveContainer>
    );
  }
}
