import { Activity, EmojiSad, Alarm} from 'iconsax-react';

function InsightCard() {
    return (
        <div className="insight-card-wrapper">
            <div className="insight-card__info">
                <p className="insight-card-title h-sm">AI-Powered Insights</p>
                <div className="insight-card-info">
                    <div className="insight-card-info-item">
                        <Activity size="32" color="#a855f7" />
                        <p>The total number of working days is 28, which represents a 25% increase compared to last month. </p>
                    </div>
                    <div className="insight-card-info-item">
                        <EmojiSad size="32" color="#22c55e" />
                        <p>No developers are experiencing burnout due to development work.</p>
                    </div>
                    <div className="insight-card-info-item">
                        <Alarm size="32" color="#eab308" />
                        <p>The total number of incident alerts is zero, indicating no issues in production.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InsightCard;
