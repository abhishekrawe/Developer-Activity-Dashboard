// components/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import LineChartComponent from './Charts/LineChart';
import UserData from './Charts/UserData';
import PieChartComponents from './Charts/PieChart';
import BarChartComponent from './Charts/BarChart';
import DoubleChart from './Charts/DoubleChart';
import { Data } from '../interface/utils/totalCalculation';
import { calculateTotals } from '../utils/totalCalculation';

const Dashboard: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/sample-data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json() as { data: Data };
                setData(jsonData.data);
            } catch (error) {
                setError('Error fetching the JSON data');
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    const totals = calculateTotals(data);

    return (
        <div className="dashboard-wrapper">
            <h1 className='title'> Overview </h1>
            <div className="card-container">
                <Cards title="Total PR open" description={totals.totalPROpen.toString()} />
                <Cards title="Total PR Merged" description={totals.totalPRMerged.toString()} />
                <Cards title="Total Commits" description={totals.totalCommits.toString()} />
                <Cards title="Total PR Reviewed" description={totals.totalPRReviewed.toString()} />
                <Cards title="Total PR Comments" description={totals.totalPRComments.toString()} />
                <Cards title="Total Incident Alert" description={totals.totalIncidentAlert.toString()} />
                <Cards title="Total Incident Resolved" description={totals.totalIncidentResolved.toString()} />
                {/* <Cards title="Overall Burnout Status" description={totals.totalBurnoutStatus.toString()} /> */}
                <Cards title="Total Active Days" description={totals.totalActiveDays.toString()} />
            </div>
            <div className="chart-wrapper">
                <LineChartComponent className="line-chart-component" />
                <UserData className="user-data" />
            </div>
            <div className="chart-wrapper_summary">
                <PieChartComponents />
                <BarChartComponent />
                <DoubleChart />
            </div>
        </div>
    );
};

export default Dashboard;
