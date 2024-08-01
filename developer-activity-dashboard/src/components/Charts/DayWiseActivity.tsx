import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LabelList, ResponsiveContainer } from "recharts";

interface DayWiseActivityChartProps {
    data: { name: string; count: number }[];
}

const DayWiseActivityChart: React.FC<DayWiseActivityChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid color="rgb(102, 102, 102)" strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8">
                    <LabelList dataKey="count" position="top" />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DayWiseActivityChart;
