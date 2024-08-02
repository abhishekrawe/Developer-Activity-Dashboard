import React, { useEffect, useState } from 'react';
import { getUserData } from '../services/userService';
import { Row } from '../interface/utils/totalCalculation';

const Card: React.FC<{ name: string }> = ({ name }) => {
  const [data, setData] = useState<Row | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData(name);
        setData(userData);
      } catch (error) {
        setError('Error fetching the JSON data');
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [name]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data ? (
        <>
          <h2>{data.name}</h2>
          <h3>Total Activity</h3>
          <ul>
            {data.totalActivity.map((activity, idx) => (
              <li key={idx}>
                {activity.name}: {activity.value}
              </li>
            ))}
          </ul>
          <h3>Day Wise Activity</h3>
          <div>
            {data.dayWiseActivity.map((dayActivity, idx) => (
              <div key={idx}>
                <h4>Date: {dayActivity.date}</h4>
                <ul>
                  {dayActivity.items.children.map((item, i) => (
                    <li key={i} style={{ color: item.fillColor }}>
                      {item.label}: {item.count}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3>Active Days</h3>
          <div>
            <p>Days Active: {data.activeDays.days}</p>
            <p>Burnout Status: {data.activeDays.isBurnOut ? 'Burnout' : 'No Burnout'}</p>
            <p>Insights: {data.activeDays.insight.join(', ')}</p>
          </div>
        </>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Card;
