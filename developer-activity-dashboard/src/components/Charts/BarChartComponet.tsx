import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LabelList, ResponsiveContainer } from "recharts";

interface BarChartComponentProps {
    data: { name: string; count: number }[];
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 140, left: 0, bottom: 5 }}>
                <CartesianGrid color="rgb(102, 102, 102)" strokeDasharray="4 4" />
                <XAxis dataKey="name" />
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

export default BarChartComponent;
