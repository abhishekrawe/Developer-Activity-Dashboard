import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import UserData from './Charts/UserData';
import { Data } from '../interface/utils/totalCalculation';
import { Totals } from '../interface/utils/total';
import { calculateTotals } from '../utils/totalCalculation';
import TotalWorkLog from './Charts/TotalWorkLog';
import { fetchData } from '../services/dataService';
import { transformChartData } from '../utils/chartDataUtils';
import { cardDetails } from '../constant/cardDetails';
import InsightCard from './Cards/insightCard';
import { useSelector } from 'react-redux';
import Header from './Shared/Header';

const Dashboard: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);
    const [error, setError] = useState<string | null>(null);
    const darkMode = useSelector((state: any) => state.theme.darkMode);

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                const fetchedData = await fetchData();
                setData(fetchedData);
            } catch (error) {
                setError('Error fetching the JSON data');
                console.error('Fetch error:', error);
            }
        };

        loadDashboardData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    const totals: Totals = calculateTotals(data);
    const chartData = transformChartData(data.AuthorWorklog.rows);

    return (
        <>
            <Header />
            <div className={`dashboard-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className='dashboard-wrapper-title'>
                    <p className='h-md dashboard-wrapper__title'>Developer Activity</p>
                </div>
                <div className="card-container">
                    {cardDetails.map(({ title, color, bgColor, icon, key }) => (
                        <Cards
                            key={title}
                            title={title}
                            description={totals[key as keyof Totals].toString()}
                            icon={icon}
                            iconColor={color}
                            iconBgColor={bgColor}
                        />
                    ))}
                </div>
                <div className="chart-wrapper">
                    <TotalWorkLog className="total-worklog-component" data={chartData} />
                    <UserData className="user-data" rows={data.AuthorWorklog.rows} />
                </div>
                <div className='chart-wrapper-info'>
                    <InsightCard />
                </div>
            </div>
        </>
        
    );
};

export default Dashboard;
