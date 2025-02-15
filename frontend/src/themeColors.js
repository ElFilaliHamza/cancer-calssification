export const themeColors = {
  mainColor: {
    // Vibrant teal as the core "brand" color
    DEFAULT: "#2AB7CA", // Vibrant teal
    // A deeper teal for dark mode or accents
    dark: "#1A8A9E", // Dark teal
    // A lighter, pastel teal for backgrounds or highlights
    light: "#A8E6EF", // Light pastel teal
  },
  success: {
    // Vibrant green for success
    DEFAULT: "#4CAF50", // Vibrant green
    // A deeper green for dark mode or accents
    dark: "#388E3C", // Dark green
    // A soft, pastel green for backgrounds or highlights
    light: "#C8E6C9", // Light pastel green
  },
  danger: {
    // Vibrant red for danger
    DEFAULT: "#F44336", // Vibrant red
    // A deeper red for dark mode or accents
    dark: "#D32F2F", // Dark red
    // A soft, pastel red for backgrounds or highlights
    light: "#FFCDD2", // Light pastel red
  },
  warning: {
    // Vibrant yellow for warnings
    DEFAULT: "#FFC107", // Vibrant yellow
    // A deeper yellow for dark mode or accents
    dark: "#FFA000", // Dark yellow
    // A soft, pastel yellow for backgrounds or highlights
    light: "#FFECB3", // Light pastel yellow
  },
  info: {
    // Vibrant blue for informational messages
    DEFAULT: "#2196F3", // Vibrant blue
    // A deeper blue for dark mode or accents
    dark: "#1976D2", // Dark blue
    // A soft, pastel blue for backgrounds or highlights
    light: "#BBDEFB", // Light pastel blue
  },
};

// Updated predictionColorMap with vibrant colors
export const predictionColorMap = {
  cancer: {
    background: themeColors.danger.light, // Light red for background
    text: themeColors.danger.dark, // Dark red for text
    iconColor: themeColors.danger.DEFAULT, // Vibrant red for the icon
    friendlyName: "Cancer Detected",
  },
  pas_de_cancer: {
    background: themeColors.success.light, // Light green for background
    text: themeColors.success.dark, // Dark green for text
    iconColor: themeColors.success.DEFAULT, // Vibrant green for the icon
    friendlyName: "No Cancer Detected",
  },
  cancer_pas_grave: {
    background: themeColors.mainColor.light, // Light teal for background
    text: themeColors.mainColor.dark, // Dark teal for text
    iconColor: themeColors.mainColor.DEFAULT, // Vibrant teal for the icon
    friendlyName: "Mild/Non-Severe Cancer",
  },
  warning: {
    background: themeColors.warning.light, // Light yellow for background
    text: themeColors.warning.dark, // Dark yellow for text
    iconColor: themeColors.warning.DEFAULT, // Vibrant yellow for the icon
    friendlyName: "Warning: Uncertain Results",
  },
  default: {
    background: themeColors.info.light, // Light blue for background
    text: themeColors.info.dark, // Dark blue for text
    iconColor: themeColors.info.DEFAULT, // Vibrant blue for the icon
    friendlyName: "Unknown",
  },
};
