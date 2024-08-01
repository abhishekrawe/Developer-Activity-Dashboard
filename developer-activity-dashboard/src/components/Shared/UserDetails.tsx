// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Cards from "../Cards/Cards";
// import DoubleChart from "../Charts/DoubleChart";
// import { Data, Row, TotalActivity, DayWiseActivity, DayActivityItem } from "../../interface/utils/totalCalculation";

// const UserDetail: React.FC = () => {
//     const { name } = useParams<{ name: string }>();
//     const [userData, setUserData] = useState<Row | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [selectedDate, setSelectedDate] = useState<string>("");
//     const [selectedDayActivity, setSelectedDayActivity] = useState<DayWiseActivity | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/sample-data.json');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const jsonData = await response.json() as { data: Data };
//                 const user = jsonData.data.AuthorWorklog.rows.find((row: Row) => row.name.split('@')[0] === name);
//                 if (user) {
//                     setUserData(user);
//                     if (user.dayWiseActivity.length > 0) {
//                         setSelectedDate(user.dayWiseActivity[0].date);
//                         setSelectedDayActivity(user.dayWiseActivity[0]);
//                     }
//                 } else {
//                     setError('User not found');
//                 }
//             } catch (error) {
//                 setError('Error fetching the JSON data');
//                 console.error('Fetch error:', error);
//             }
//         };

//         fetchData();
//     }, [name]);

//     const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const date = event.target.value;
//         setSelectedDate(date);
//         if (userData) {
//             const dayActivity = userData.dayWiseActivity.find(activity => activity.date === date);
//             setSelectedDayActivity(dayActivity || null);
//         }
//     };

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!userData) {
//         return <div>Loading...</div>;
//     }

//     const { totalActivity, activeDays } = userData;

//     const pieChartData = selectedDayActivity ? selectedDayActivity.items.children.map((item: DayActivityItem) => ({
//         name: `${item.label}`,
//         value: parseInt(item.count, 10),
//     })) : [];

//     return (
//         <div className="user-details__wrapper">
//             <p className="h-md user-detail-name">{name}</p>
//             <div className="user-details__container">
//                 {totalActivity.map((activity: TotalActivity, index: number) => (
//                     <Cards key={index} title={activity.name} description={activity.value} />
//                 ))}
//                 <Cards title={"Total Active Days"} description={activeDays.days.toString()} />
//             </div>
//             <div className="date-picker__container">
//                 <label htmlFor="date-picker">Select Date:</label>
//                 <select id="date-picker" value={selectedDate} onChange={handleDateChange}>
//                     {userData.dayWiseActivity.map((activity: DayWiseActivity, index: number) => (
//                         <option key={index} value={activity.date}>{activity.date}</option>
//                     ))}
//                 </select>
//             </div>
//             <div className="user-details-chart__container">
//                 <DoubleChart data={pieChartData} />
//             </div>
//         </div>
//     );
// };

// export default UserDetail;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import BarChartComponent from "../../components/Charts/BarChartComponet";
import { Data, Row, TotalActivity, DayWiseActivity, DayActivityItem } from "../../interface/utils/totalCalculation";

const UserDetail: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [userData, setUserData] = useState<Row | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedDayActivity, setSelectedDayActivity] = useState<DayWiseActivity | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/sample-data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json() as { data: Data };
                const user = jsonData.data.AuthorWorklog.rows.find((row: Row) => row.name.split('@')[0] === name);
                if (user) {
                    setUserData(user);
                    if (user.dayWiseActivity.length > 0) {
                        setSelectedDate(user.dayWiseActivity[0].date);
                        setSelectedDayActivity(user.dayWiseActivity[0]);
                    }
                } else {
                    setError('User not found');
                }
            } catch (error) {
                setError('Error fetching the JSON data');
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [name]);

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const date = event.target.value;
        setSelectedDate(date);
        if (userData) {
            const dayActivity = userData.dayWiseActivity.find(activity => activity.date === date);
            setSelectedDayActivity(dayActivity || null);
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    const { totalActivity, activeDays } = userData;

    const barChartData = selectedDayActivity ? selectedDayActivity.items.children.map((item: DayActivityItem) => ({
        name: item.label,
        count: parseInt(item.count, 10),
    })) : [];

    return (
        <div className="user-details__wrapper">
            <p className="h-md user-detail-name">{name}</p>
            <div className="user-details__container">
                {totalActivity.map((activity: TotalActivity, index: number) => (
                    <Cards key={index} title={activity.name} description={activity.value} />
                ))}
                <Cards title={"Total Active Days"} description={activeDays.days.toString()} />
            </div>
            <div className="date-picker__container">
                <label htmlFor="date-picker">Select Date:</label>
                <select id="date-picker" value={selectedDate} onChange={handleDateChange}>
                    {userData.dayWiseActivity.map((activity: DayWiseActivity, index: number) => (
                        <option key={index} value={activity.date}>{activity.date}</option>
                    ))}
                </select>
            </div>
            <div className="user-details-chart__container">
                <BarChartComponent data={barChartData} />
            </div>
        </div>
    );
};

export default UserDetail;

