import React from 'react';
import { IconType } from 'react-icons';
import { useSelector } from 'react-redux';

interface CardProps {
  title: string;
  description: string;
  icon: IconType;
  iconColor: string;
  iconBgColor: string;
}

const Cards: React.FC<CardProps> = ({ title, description, icon: Icon, iconColor, iconBgColor }) => {
  const darkMode = useSelector((state: any) => state.theme.darkMode);

  return (
    <div className={`card-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`card-wrapper_details ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className={`card-wrapper_details_title ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <div className={`icon-background ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ backgroundColor: iconBgColor }}>
            <Icon color={iconColor} size={24} />
          </div>
          <p className='u-lg'>{title}</p>
        </div>
        <p className="h-lg card-wrapper_details_description">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
