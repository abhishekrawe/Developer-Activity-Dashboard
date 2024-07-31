import React from 'react';
import Cards from './Cards/Cards';
import LineChartComponent from './Charts/LineChart';
import UserData from './Charts/UserData';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-wrapper">
            <h1 className='title'> Overview </h1>
            <div className="card-container">
                <Cards title="Total Sales" description="$12,345" />
                <Cards title="Total PR Open" description="45" />
                <Cards title="Total PR Merged" description="76" />
                <Cards title="Total Commits" description="23" />
                <Cards title="Total PR Reviewed" description="19" />
                <Cards title="Total PR Comments" description="$56,789" />
                <Cards title="Total Active Days" description="98" />
                <Cards title="Overall Burnout Status" description="98" />
            </div>
            <div className="chart-wrapper">
                <LineChartComponent className="line-chart-component" />
                <UserData className="user-data" />
            </div>
            <h1>Hello </h1>
        </div>
    );
};

export default Dashboard;
