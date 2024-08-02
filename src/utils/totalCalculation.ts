import { Data } from '../interface/utils/totalCalculation';

export const calculateTotals = (data: Data) => {
    let totalPROpen = 0;
    let totalPRMerged = 0;
    let totalCommits = 0;
    let totalPRReviewed = 0;
    let totalPRComments = 0;
    let totalIncidentAlert = 0;
    let totalIncidentResolved = 0;
    let totalActiveDays = 0;
    let totalBurnoutStatus = 0;

    data.AuthorWorklog.rows.forEach(row => {
        row.totalActivity.forEach(activity => {
            switch (activity.name) {
                case 'PR Open':
                    totalPROpen += parseInt(activity.value, 10);
                    break;
                case 'PR Merged':
                    totalPRMerged += parseInt(activity.value, 10);
                    break;
                case 'Commits':
                    totalCommits += parseInt(activity.value, 10);
                    break;
                case 'PR Reviewed':
                    totalPRReviewed += parseInt(activity.value, 10);
                    break;
                case 'PR Comments':
                    totalPRComments += parseInt(activity.value, 10);
                    break;
                case 'Incident Alerts':
                    totalIncidentAlert += parseInt(activity.value, 10);
                    break;
                case 'Incidents Resolved':
                    totalIncidentResolved += parseInt(activity.value, 10);
                    break;
                default:
                    break;
            }
        });

        totalActiveDays += row.activeDays.days;
        if (row.activeDays.isBurnOut) {
            totalBurnoutStatus += 1;
        }
    });

    return {
        totalPROpen,
        totalPRMerged,
        totalCommits,
        totalPRReviewed,
        totalPRComments,
        totalIncidentAlert,
        totalIncidentResolved,
        totalActiveDays,
        totalBurnoutStatus,
    };
};
