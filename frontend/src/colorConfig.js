// colorConfig.js
export const colorConfig = {
  // Colors for the "cancer" case
  cancer: {
    iconColor: "text-red-500",
    background: "bg-red-100 dark:bg-red-900",
    text: "text-red-700 dark:text-red-300",
    friendlyName: "Cancer Detected",
  },
  // Colors for "pas_de_cancer"
  pas_de_cancer: {
    iconColor: "text-green-500",
    background: "bg-green-100 dark:bg-green-900",
    text: "text-green-700 dark:text-green-300",
    friendlyName: "No Cancer Detected",
  },
  // Colors for "cancer_pas_grave"
  cancer_pas_grave: {
    iconColor: "text-blue-500",
    background: "bg-blue-100 dark:bg-blue-900",
    text: "text-blue-700 dark:text-blue-300",
    friendlyName: "Mild/Non-Severe Cancer",
  },
  // Default fallback if something doesn’t match
  default: {
    iconColor: "text-gray-500",
    background: "bg-gray-100 dark:bg-gray-800",
    text: "text-gray-800 dark:text-gray-200",
    friendlyName: "Unknown",
  },
};
