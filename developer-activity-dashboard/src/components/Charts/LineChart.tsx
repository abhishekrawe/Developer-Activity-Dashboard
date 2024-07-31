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


interface LineChartComponentProps {
  className?: string;
}

const data = [
  {
    name: "Page A",
    "PR Open": 4000,
    "PR Merged": 2400,
    "Commits": 2100,
    "PR Reviewed": 400,
    "PR Comments": 1200,
    "Incident Alerts": 2600,
    "Incidents Resolved": 3000,
    amt: 2400,
  },
  {
    name: "Page B",
    "PR Open": 3000,
    "PR Merged": 1398,
    "Commits": 2300,
    "PR Reviewed": 800,
    "PR Comments": 7000,
    "Incident Alerts": 1500,
    "Incidents Resolved": 4200,
    amt: 2210,
  },
  {
    name: "Page C",
    "PR Open": 2500,
    "PR Merged": 9800,
    "Commits": 2700,
    "PR Reviewed": 300,
    "PR Comments": 400,
    "Incident Alerts": 1800,
    "Incidents Resolved": 600,
    amt: 2290,
  },
  {
    name: "Page D",
    "PR Open": 2900,
    "PR Merged": 3808,
    "Commits": 3100,
    "PR Reviewed": 500,
    "PR Comments": 1200,
    "Incident Alerts": 1750,
    "Incidents Resolved": 400,
    amt: 2100,
  },
  {
    name: "Page E",
    "PR Open": 2000,
    "PR Merged": 4780,
    "Commits": 2500,
    "PR Reviewed": 600,
    "PR Comments": 300,
    "Incident Alerts": 1700,
    "Incidents Resolved": 500,
    amt: 2200,
  },
  {
    name: "Page F",
    "PR Open": 2800,
    "PR Merged": 500,
    "Commits": 3500,
    "PR Reviewed": 4500,
    "PR Comments": 9500,
    "Incident Alerts": 1800,
    "Incidents Resolved": 4300,
    amt: 2700,
  },
  {
    name: "Page G",
    "PR Open": 3600,
    "PR Merged": 600,
    "Commits": 2800,
    "PR Reviewed": 700,
    "PR Comments": 9800,
    "Incident Alerts": 1900,
    "Incidents Resolved": 3200,
    amt: 2300,
  },
];

const LineChartComponent: React.FC<LineChartComponentProps> = ({ className }) => {
  return (
    <div className={`linechart-wrapper ${className}`}>
      <p className="linechart-wrapper__title">
        Details
      </p>
      <div className="linechart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} className="line-chart">
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

export default LineChartComponent;
