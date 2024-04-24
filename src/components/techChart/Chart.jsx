import { Component } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

class Chart extends Component {
  render() {
    const data = [
      { technology: "java", progress: 70 },
      { technology: "kotlin", progress: 25 },
      { technology: "php", progress: 85 },
      { technology: "javascript", progress: 100 },
      { technology: "react", progress: 70 },
      { technology: "angular", progress: 40 },
      { technology: "vue", progress: 20 },
    ];
    return (
      <div>
        <BarChart
          width={620}
          height={480}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="technology" />
          <YAxis />
          <Tooltip/>
          <Legend />
          <Bar dataKey="progress" fill="#0073E7" />
        </BarChart>
      </div>
    );
  }
}

export default Chart;
