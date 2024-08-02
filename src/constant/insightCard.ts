import { Activity, EmojiSad, Alarm } from 'iconsax-react';

interface InsightCardItem {
    icon: React.ElementType;
    color: string;
    text: string;
}

export const insightCardItems: InsightCardItem[] = [
    {
        icon: Activity,
        color: "#a855f7",
        text: "The total number of working days is 28, which represents a 25% increase compared to last month.",
    },
    {
        icon: EmojiSad,
        color: "#22c55e",
        text: "No developers are experiencing burnout due to development work.",
    },
    {
        icon: Alarm,
        color: "#eab308",
        text: "The total number of incident alerts is zero, indicating no issues in production.",
    },
];
