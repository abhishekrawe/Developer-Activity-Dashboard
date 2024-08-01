import { iconData } from "../constant/iconDetails";
import { TotalActivity } from "../interface/utils/totalCalculation";
import { iconMap } from "../constant/iconMap";

export const createCardData = (activity: TotalActivity, index: number) => {
    const iconDetail = iconData[index % iconData.length];
    const IconComponent = iconMap[iconDetail.icon];

    return {
        title: activity.name,
        description: activity.value,
        icon: IconComponent,
        iconColor: iconDetail.color,
        iconBgColor: iconDetail.bgColor,
    };
};
