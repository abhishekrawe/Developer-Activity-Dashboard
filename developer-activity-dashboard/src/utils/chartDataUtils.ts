import { Row, TotalActivity } from '../interface/utils/totalCalculation';

export const transformChartData = (rows: Row[]) => {
    return rows.map((row: Row) => {
        const chartRow: { [key: string]: number | string } = { name: row.name };
        row.totalActivity.forEach((activity: TotalActivity) => {
            chartRow[activity.name] = parseInt(activity.value, 10);
        });
        return chartRow;
    });
};
