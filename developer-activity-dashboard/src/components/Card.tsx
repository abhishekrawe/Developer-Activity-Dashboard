import React, { useEffect, useState } from 'react';
import { Data } from '../interface/components/Card';

const Card: React.FC = () => {
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

  return (
    <div>
      {data.AuthorWorklog.rows.length > 0 ? (
        data.AuthorWorklog.rows.map((row, index) => (
          <div key={index}>
            <h2>{row.name}</h2>
            <h3>Total Activity</h3>
            <ul>
              {row.totalActivity.map((activity, idx) => (
                <li key={idx}>
                  {activity.name}: {activity.value}
                </li>
              ))}
            </ul>
            <h3>Day Wise Activity</h3>
            <div>
              {row.dayWiseActivity.map((dayActivity, idx) => (
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
              <p>Days Active: {row.activeDays.days}</p>
              <p>Burnout Status: {row.activeDays.isBurnOut ? 'Burnout' : 'No Burnout'}</p>
              <p>Insights: {row.activeDays.insight.join(', ')}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Card;
