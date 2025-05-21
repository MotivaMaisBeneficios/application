'use client';

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from 'recharts';

export default function Dashboard() {
  const data = [
    { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
    { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
    { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
    { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
    { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
    { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
    { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
  ];

  const legendStyle = {
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4 w-full h-full overflow-auto">
      {[...Array(3)].map((_, i) => (
        <div
          key={`radial-${i}`}
          className="col-span-12 md:col-span-6 bg-white shadow-md rounded-lg p-4 h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="10%"
              outerRadius="80%"
              barSize={10}
              data={data}
            >
              <RadialBar background dataKey="uv" />
              <Legend
                iconSize={5}
                layout="horizontal"
                verticalAlign="bottom"
                wrapperStyle={legendStyle}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      ))}

      {[...Array(3)].map((_, i) => (
        <div
          key={`bar-${i}`}
          className="col-span-12 md:col-span-6 bg-white shadow-md rounded-lg p-4 h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
}
