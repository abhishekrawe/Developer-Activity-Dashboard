import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

interface PieChartComponentProps {
    data: { name: string; count: number }[];
}

const COLORS = ['#8A2BE2', '#61CDBB', '#FAC76E', '#C2528B', '#0396A6', '#EF6B6B', '#8F3519', '#008080', '#5F50A9'];

const DayWisePieChart: React.FC<PieChartComponentProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                >
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DayWisePieChart;
