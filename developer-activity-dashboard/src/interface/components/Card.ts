export interface ActivityMeta {
    label: string;
    fillColor: string;
}

export interface TotalActivity {
    name: string;
    value: string;
}

export interface Row {
    name: string;
    totalActivity: TotalActivity[];
    dayWiseActivity: {
        date: string;
        items: {
            children: {
                count: string;
                label: string;
                fillColor: string;
            }[];
        };
    }[];
    activeDays: {
        days: number;
        isBurnOut: boolean;
        insight: string[];
    };
}

export interface AuthorWorklog {
    activityMeta: ActivityMeta[];
    rows: Row[];
}

export interface Data {
    data(data: any): unknown;
    AuthorWorklog: AuthorWorklog;
}
