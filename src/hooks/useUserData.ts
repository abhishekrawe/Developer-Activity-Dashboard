import { useEffect, useState } from "react";
import { Row, DayWiseActivity } from "../interface/utils/totalCalculation";
import { getUserData } from "../services/userService";

export const useUserData = (name: string) => {
    const [userData, setUserData] = useState<Row | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedDayActivity, setSelectedDayActivity] = useState<DayWiseActivity | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUserData(name);
                if (user) {
                    setUserData(user);
                    if (user.dayWiseActivity.length > 0) {
                        setSelectedDate(user.dayWiseActivity[0].date);
                        setSelectedDayActivity(user.dayWiseActivity[0]);
                    }
                } else {
                    setError("User not found");
                }
            } catch (error) {
                setError("Error fetching the JSON data");
            }
        };

        fetchData();
    }, [name]);

    return {
        userData,
        error,
        selectedDate,
        setSelectedDate,
        selectedDayActivity,
        setSelectedDayActivity,
    };
};
