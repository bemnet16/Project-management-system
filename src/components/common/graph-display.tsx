import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Project A',
    "Allocated Budget": 1000000,
    "Used Budget": 554094,
  },
  {
    name: 'Project B',
    "Allocated Budget": 850000,
    "Used Budget": 435000,
  },
  {
    name: 'Project D',
    "Allocated Budget": 2500000,
    "Used Budget": 1675967,
  },
  {
    name: 'Project A',
    "Allocated Budget": 1750000,
    "Used Budget": 1000000,
  },
  {
    name: 'Project B',
    "Allocated Budget": 657000,
    "Used Budget": 768654,
  },
  {
    name: 'Project B',
    "Allocated Budget": 1300000,
    "Used Budget": 978000,
  },
  {
    name: 'Project A',
    "Allocated Budget": 1000000,
    "Used Budget": 554094,
  },
  {
    name: 'Project B',
    "Allocated Budget": 850000,
    "Used Budget": 435000,
  },
  {
    name: 'Project D',
    "Allocated Budget": 2500000,
    "Used Budget": 1675967,
  },
  {
    name: 'Project A',
    "Allocated Budget": 1750000,
    "Used Budget": 1000000,
  },
  {
    name: 'Project B',
    "Allocated Budget": 657000,
    "Used Budget": 768654,
  },
  {
    name: 'Project B',
    "Allocated Budget": 1300000,
    "Used Budget": 978000,
  },
  
];

export default class GraphDisplay extends PureComponent {
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
          <Line type="monotone" dataKey="Allocated Budget" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Used Budget" stroke="#82ca9d" />
        </LineChart>
      // </ResponsiveContainer>
    );
  }
}
