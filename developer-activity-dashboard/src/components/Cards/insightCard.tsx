import React from 'react';
import { Activity, EmojiSad, Alarm } from 'iconsax-react';
import { useSelector } from 'react-redux';

const InsightCard: React.FC = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode); 

    return (
        <div className={`insight-card-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className={`insight-card__info ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                <p className={`insight-card-title h-sm ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                    AI-Powered Insights
                </p>
                <div className={`insight-card-info ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                    <div className={`insight-card-info-item ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                        <Activity size="32" className={`insight-card-icon ${darkMode ? 'dark-mode' : 'light-mode'}`} color="#a855f7" />
                        <p className={`insight-card-text ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                            The total number of working days is 28, which represents a 25% increase compared to last month.
                        </p>
                    </div>
                    <div className={`insight-card-info-item ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                        <EmojiSad size="32" className={`insight-card-icon ${darkMode ? 'dark-mode' : 'light-mode'}`} color="#22c55e" />
                        <p className={`insight-card-text ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                            No developers are experiencing burnout due to development work.
                        </p>
                    </div>
                    <div className={`insight-card-info-item ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                        <Alarm size="32" className={`insight-card-icon ${darkMode ? 'dark-mode' : 'light-mode'}`} color="#eab308" />
                        <p className={`insight-card-text ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                            The total number of incident alerts is zero, indicating no issues in production.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsightCard;
