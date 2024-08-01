import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LabelList } from "recharts";

interface BarChartComponentProps {
    data: { name: string; count: number }[];
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
    return (
        <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8">
                <LabelList dataKey="count" position="top" />
            </Bar>
        </BarChart>
    );
};

export default BarChartComponent;
