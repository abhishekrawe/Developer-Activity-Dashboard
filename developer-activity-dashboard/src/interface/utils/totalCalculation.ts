export interface ActivityMeta {
    label: string;
    fillColor: string;
}

export interface TotalActivity {
    name: string;
    value: string;
}

export interface DayActivityItem {
    count: string;
    label: string;
    fillColor: string;
}

export interface DayWiseActivity {
    date: string;
    items: {
        children: DayActivityItem[];
    };
}

export interface ActiveDays {
    days: number;
    isBurnOut: boolean;
    insight: string[];
}

export interface Row {
    name: string;
    totalActivity: TotalActivity[];
    dayWiseActivity: DayWiseActivity[];
    activeDays: ActiveDays;
    className?: string;
}

export interface AuthorWorklog {
    activityMeta: ActivityMeta[];
    rows: Row[];
}

export interface Data {
    AuthorWorklog: AuthorWorklog;
}