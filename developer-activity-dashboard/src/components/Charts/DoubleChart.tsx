import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface DoubleChartProps {
    data: { name: string; value: number }[];
}

const DoubleChart: React.FC<DoubleChartProps> = ({ data }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C', '#D0ED57', '#8884d8', '#82ca9d'];

    return (
        <PieChart width={400} height={400} className="double-chart__wrapper">
            <Pie
                data={data}
                dataKey="value"
                cx={200}
                cy={200}
                outerRadius={60}
                fill="#8884d8"
                label
                labelLine={false}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Pie
                data={data}
                dataKey="value"
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
                labelLine={false}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
};

export default DoubleChart;
