import {
    PiGitPullRequestDuotone,
    PiGitMergeDuotone,
    PiGitCommitDuotone,
    PiGitDiffDuotone,
    PiGitForkDuotone,
    PiSealWarningDuotone,
    PiShieldWarningDuotone,
    PiGpsFixDuotone,
} from "react-icons/pi";

export const cardDetails = [
    { title: "PR open", color: "#EF6B6B", bgColor: "rgba(239, 107, 107, 0.2)", icon: PiGitPullRequestDuotone, key: 'pROpen' },
    { title: "PR Merged", color: "#61CDBB", bgColor: "rgba(97, 205, 187, 0.2)", icon: PiGitMergeDuotone, key: 'pRMerged' },
    { title: "Commits", color: "#FAC76E", bgColor: "rgba(250, 199, 110, 0.2)", icon: PiGitCommitDuotone, key: 'commits' },
    { title: "PR Reviewed", color: "#C2528B", bgColor: "rgba(194, 82, 139, 0.2)", icon: PiGitDiffDuotone, key: 'pReviewed' },
    { title: "PR Comments", color: "#0396A6", bgColor: "rgba(3, 150, 166, 0.2)", icon: PiGitForkDuotone, key: 'pRComments' },
    { title: "Incident Alerts", color: "#5F50A9", bgColor: "rgba(95, 80, 169, 0.2)", icon: PiSealWarningDuotone, key: 'incidentAlert' },
    { title: "Incidents Resolved", color: "#8F3519", bgColor: "rgba(143, 53, 25, 0.2)", icon: PiShieldWarningDuotone, key: 'incidentResolved' },
    { title: "Active Days", color: "#008080", bgColor: "rgba(0, 128, 128, 0.2)", icon: PiGpsFixDuotone, key: 'activeDays' },
];
