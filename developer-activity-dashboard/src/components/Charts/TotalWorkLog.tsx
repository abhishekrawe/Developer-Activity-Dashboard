import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface WorkLogComponentProps {
  className?: string;
  data: { [key: string]: number | string }[];
}

const TotalWorkLog: React.FC<WorkLogComponentProps> = ({ className, data }) => {
  return (
    <div className={`total-worklog-wrapper ${className}`}>
      <p className="total-worklog-wrapper__title h-sm">
        Total WorkLog
      </p>
      <div className="total-worklog-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} className="work-log">
            <CartesianGrid strokeDasharray="3 3" className="cartesian-grid" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} className="x-axis" />
            <YAxis className="y-axis" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="PR Open"
              stroke="#EF6B6B"
              strokeWidth={4}
              className="line-pr-open"
            />
            <Line
              type="monotone"
              dataKey="PR Merged"
              stroke="#61CDBB"
              strokeWidth={4}
              className="line-pr-merged"
            />
            <Line
              type="monotone"
              dataKey="Commits"
              stroke="#FAC76E"
              strokeWidth={4}
              className="line-commits"
            />
            <Line
              type="monotone"
              dataKey="PR Reviewed"
              stroke="#C2528B"
              strokeWidth={4}
              className="line-pr-reviewed"
            />
            <Line
              type="monotone"
              dataKey="PR Comments"
              stroke="#0396A6"
              strokeWidth={4}
              className="line-pr-comments"
            />
            <Line
              type="monotone"
              dataKey="Incident Alerts"
              stroke="#5F50A9"
              strokeWidth={4}
              className="line-incident-alerts"
            />
            <Line
              type="monotone"
              dataKey="Incidents Resolved"
              stroke="#8F3519"
              strokeWidth={4}
              className="line-incidents-resolved"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalWorkLog;
