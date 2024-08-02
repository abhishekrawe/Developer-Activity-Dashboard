import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from '../../interface/utils/totalCalculation';
import { User } from 'iconsax-react';
import { PiArrowUpRight } from "react-icons/pi";
import { useSelector } from 'react-redux';

interface UserDataProps {
  rows: Row[];
  className?: string;
}

const UserData: React.FC<UserDataProps> = ({ rows, className }) => {
  const [userDetails, setUserDetails] = useState<{ name: string; email: string }[]>([]);
  const [error] = useState<string | null>(null);
  const navigate = useNavigate();
  const darkMode = useSelector((state: any) => state.theme.darkMode);

  useEffect(() => {
    const details = rows.map((row: Row) => {
      const email = row.name;
      const name = email.split('@')[0];
      return { name, email };
    });
    setUserDetails(details);
  }, [rows]);

  if (error) {
    return <div>{error}</div>;
  }

  if (userDetails.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`userdata-wrapper ${className} ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`user-data__wrapper__info ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <p className={`user-data__wrapper__title h-sm ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          Active User
        </p>
        {userDetails.map((user, index) => (
          <div key={index} className={`user-data__info ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className='user-data__info-wrapper'>
              <div className={`user-data__avatar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <User size="32" className='user-data__avatar-img' />
              </div>
              <div className="user-data__details">
                <p className={`h-sm user_name ${darkMode ? 'dark-mode' : 'light-mode'}`}>{user.name}</p>
                <p className={`u-md user_email ${darkMode ? 'dark-mode' : 'light-mode'}`}>{user.email}</p>
              </div>
            </div>
            <div className="user-data__action">
              <button className={`user-data__action-btn ${darkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => navigate(`/${user.name}`)}>
                View Details <PiArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserData;
