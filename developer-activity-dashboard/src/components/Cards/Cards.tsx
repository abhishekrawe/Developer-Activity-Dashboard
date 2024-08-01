import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  description: string;
  icon: IconType;
  iconColor: string;
  iconBgColor: string;
}

const Cards: React.FC<CardProps> = ({ title, description, icon: Icon, iconColor, iconBgColor }) => {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper_details">
        <div className="card-wrapper_details_title">
          <div className="icon-background" style={{ backgroundColor: iconBgColor }}>
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
