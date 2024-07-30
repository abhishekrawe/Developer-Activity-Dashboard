import { useEffect, useState } from 'react';

interface ActivityMeta {
  label: string;
  fillColor: string;
}

interface TotalActivity {
  name: string;
  value: string;
}

interface Row {
  name: string;
  totalActivity: TotalActivity[];
}

interface AuthorWorklog {
  activityMeta: ActivityMeta[];
  rows: Row[];
}

interface Data {
  AuthorWorklog: AuthorWorklog;
}

const Card = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch('/sample-data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); 
        setData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching the JSON data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.AuthorWorklog.rows.map((row, index) => (
        <div key={index}>{row.name}</div>
      ))}
    </div>
  );
};

export default Card;
