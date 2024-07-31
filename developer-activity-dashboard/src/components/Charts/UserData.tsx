// components/UserData.tsx

import React, { useEffect, useReducer, useState } from 'react';
import { Data, Row } from '../../interface/utils/totalCalculation';

interface UserDataProps {
  className?: string;
}

const UserData: React.FC<UserDataProps> = ({ className }) => {
  const [userDetails, setUserDetails] = useState<{ name: string; email: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/sample-data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json() as { data: Data };
        const details = jsonData.data.AuthorWorklog.rows.map((row: Row) => {
          const email = row.name;
          const name = email.split('@')[0];
          return { name, email };
        });
        setUserDetails(details);
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

  if (userDetails.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`userdata-wrapper ${className}`}>
      <div className="user-data__wrapper__info">
        <p className="user-data__wrapper__title h-sm">Active User</p>
        {userDetails.map((user, index) => (
          <div key={index} className="user-data__info">
            <div className="user-data__details">
              <p className="h-sm user_name">{user.name}</p>
              <p>{user.email}</p>
            </div>
            <div className="user-data__action">
              <button className="user-data__action-btn">Click</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserData;
