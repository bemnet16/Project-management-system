import { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';





interface PiechartPercentageProps {
  datas: { name: string; value: number; color: string }[];
}



export default class PiechartPercentage extends PureComponent<PiechartPercentageProps> {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';
  
  render() {
  
  
    const { datas } = this.props;

    
    return (
      <PieChart width={200} height={200}>
        <Pie
          data={datas}
          cx={80}
          cy={80}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {datas.map((data, index) => (
            <Cell key={`cell-${index}`} fill={data.color} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}



