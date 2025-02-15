import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { predictionColorMap } from "../themeColors";

const PredictionResult = ({ result }) => {
  // Retrieve color styles from the predictionColorMap
  const predictionColors =
    predictionColorMap[result] || predictionColorMap.default;
  const { iconColor, background, text, friendlyName } = predictionColors;

  // Decide which Material UI icon to display
  let IconComponent = InfoOutlinedIcon;
  if (result === "cancer") {
    IconComponent = ErrorOutlineIcon;
  } else if (result === "pas_de_cancer") {
    IconComponent = CheckCircleOutlineIcon;
  } else if (result === "cancer_pas_grave") {
    IconComponent = InfoOutlinedIcon;
  }

  // Inline styles for the container and text
  const containerStyle = {
    width: "100%",
    maxWidth: "400px",
    marginTop: "1.5rem",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    backgroundColor: background,
    color: text,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: iconColor,
    marginBottom: "0.5rem",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const textStyle = {
    fontSize: "1rem",
    fontWeight: "600",
  };

  const rawPredictionStyle = {
    fontWeight: "400",
  };

  return (
    <div style={containerStyle}>
      <IconComponent style={iconStyle} />
      <h2 style={titleStyle}>{friendlyName}</h2>
      <p style={textStyle}>
        Raw Prediction: <span style={rawPredictionStyle}>{result}</span>
      </p>
    </div>
  );
};

export default PredictionResult;
