import React from 'react';
import { useSelector } from 'react-redux';
import { insightCardItems } from '../../constant/insightCard';

const InsightCard: React.FC = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode);

    return (
        <div className={`insight-card-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`insight-card__info ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <p className={`insight-card-title h-sm ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                    AI-Powered Insights
                </p>
                <div className={`insight-card-info ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                    {insightCardItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className={`insight-card-info-item ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                                <IconComponent size="32" className={`insight-card-icon ${darkMode ? 'dark-mode' : 'light-mode'}`} color={item.color} />
                                <p className={`insight-card-text ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default InsightCard;
