import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import DayWiseActivityChart from "../Charts/DayWiseActivity";
import DayWisePieChart from "../Charts/DayWisePieChart";
import DateWiseLineChart from "../Charts/DateWiseLineChart";
import { useUserData } from "../../hooks/useUserData";
import { createCardData } from "../../utils/cardUtils";
import { formatBarChartData, formatAreaChartData } from "../../utils/chartUtils";
import Loading from "./Loading";

const UserDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  if (!name) {
    return <div>No user name provided</div>;
  }

  const {
    userData,
    error,
    selectedDate,
    setSelectedDate,
    selectedDayActivity,
    setSelectedDayActivity,
  } = useUserData(name);

  if (error) return <div>{error}</div>;
  if (!userData) return <div><Loading/></div>;

  const { totalActivity, activeDays, dayWiseActivity } = userData;

  const cardData = [
    ...totalActivity.map((activity, index) => createCardData(activity, index)),
    createCardData({ name: "Total Active Days", value: activeDays.days.toString() }, 0),
  ];

  const barChartData = formatBarChartData(selectedDayActivity);
  const areaChartData = formatAreaChartData(dayWiseActivity);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    setSelectedDayActivity(dayWiseActivity.find(activity => activity.date === date) || null);
  };

  return (
    <div className="user-details__wrapper">
      <p className="h-md user-detail-name">Total Activity by {name}</p>
      <div className="user-details__container">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            iconColor={card.iconColor}
            iconBgColor={card.iconBgColor}
          />
        ))}
      </div>
      <div className="user-details__wrapper-chart-section">
        <div className="user-details-chart__container">
          <div className="date-picker__container">
            <p className="h-md date-picker-title">Select Date</p>
            <select
              id="date-picker"
              className="date-picker"
              value={selectedDate}
              onChange={handleDateChange}
            >
              {dayWiseActivity.map((activity, index) => (
                <option key={index} value={activity.date}>
                  {activity.date}
                </option>
              ))}
            </select>
          </div>
          <DayWiseActivityChart data={barChartData} />
        </div>
        <div className="user-details-chart__container-pie">
          <DayWisePieChart data={barChartData} />
        </div>
      </div>
      <div className="user-details-area-chart">
        <p className="h-md user-details-area-title">Date Wise Activity</p>
        <DateWiseLineChart data={areaChartData} />
      </div>
    </div>
  );
};

export default UserDetail;
