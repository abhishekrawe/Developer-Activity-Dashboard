import { DayWiseActivity } from "../interface/utils/totalCalculation";

export const formatBarChartData = (dayActivity: DayWiseActivity | null) =>
    dayActivity
        ? dayActivity.items.children.map((item) => ({
            name: item.label,
            count: parseInt(item.count, 10),
        }))
        : [];

export const formatAreaChartData = (dayWiseActivity: DayWiseActivity[]) =>
    dayWiseActivity.map((activity) => ({
        date: activity.date,
        value: activity.items.children.reduce((total, item) => total + parseInt(item.count, 10), 0),
    }));
