import React, { useEffect, useState } from "react";
import axios from "axios";
import FileUpload from "../components/FileUpload";
import PredictionResult from "../components/PredictionResult";
import { themeColors, predictionColorMap } from "../themeColors";
import { FaSun, FaMoon } from "react-icons/fa";

const Home = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleFileUpload = async (file) => {
    if (!file) {
      setError("Please select an image to upload.");
      return;
    }
    setLoading(true);
    setError(null);
    setPrediction(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // sleep
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/predict-image/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data.prediction);
    } catch (err) {
      console.error("Error uploading file:", err);
      setError(
        err.response?.data?.message || "An error occurred while predicting."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, []);

  const mainContainerStyle = {
    minHeight: "100vh",
    backgroundColor: darkMode
      ? themeColors.mainColor.dark
      : themeColors.mainColor.light,
    color: darkMode ? themeColors.mainColor.light : themeColors.mainColor.dark,
    transition: "background-color 0.3s, color 0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: "2rem",
  };

  const buttonStyle = {
    backgroundColor: darkMode
      ? themeColors.mainColor.light
      : themeColors.mainColor.DEFAULT,
    color: darkMode ? themeColors.mainColor.dark : "#FFFFFF",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "absolute",
    top: "1rem",
    right: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", // Add spacing between the icon and text
    fontWeight: "bold",
    transition: "background-color 0.3s, color 0.3s",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginTop: "5rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    textShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
  };

  const loadingContainerStyle = {
    marginTop: "1.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const spinnerStyle = {
    width: "2rem",
    height: "2rem",
    borderWidth: "0.25rem",
    borderStyle: "solid",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    borderColor: themeColors.mainColor.DEFAULT,
    borderTopColor: "transparent",
  };

  const errorStyle = {
    marginTop: "1.5rem",
    padding: "1rem",
    borderRadius: "0.5rem",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    backgroundColor: darkMode
      ? themeColors.danger.dark
      : themeColors.danger.light,
    color: darkMode ? themeColors.danger.light : themeColors.danger.dark,
  };

  return (
    <div style={mainContainerStyle}>
      <button onClick={() => setDarkMode(!darkMode)} style={buttonStyle}>
        {darkMode ? <FaSun /> : <FaMoon />} {/* Add dynamic icon */}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 style={titleStyle}>Cancer Classification</h1>

      <FileUpload
        onUpload={handleFileUpload}
        disabled={loading}
        darkMode={darkMode}
      />

      {loading && (
        <div style={loadingContainerStyle}>
          <div style={spinnerStyle} />
          <p style={{ marginTop: "0.5rem" }}>Processing image...</p>
        </div>
      )}

      {error && <div style={errorStyle}>{error}</div>}

      {prediction && !loading && (
        <PredictionResult result={prediction} colorMap={predictionColorMap} />
      )}
    </div>
  );
};

export default Home;
