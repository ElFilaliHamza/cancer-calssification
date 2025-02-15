import React, { useState } from "react";
import { themeColors } from "../themeColors";

const FileUpload = ({ onUpload, disabled, darkMode }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && onUpload) {
      onUpload(file);
    }
  };

  // Inline styles for the form and elements
  const formStyle = {
    width: "100%",
    maxWidth: "400px",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: darkMode
      ? themeColors.mainColor.light
      : themeColors.mainColor.dark,
    color: darkMode ? themeColors.mainColor.light : themeColors.mainColor.dark,
    transition: "background-color 0.3s, color 0.3s",
  };

  const labelStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: `2px dashed ${
      darkMode ? themeColors.mainColor.light : themeColors.mainColor.DEFAULT
    }`,
    borderRadius: "0.5rem",
    padding: "1.5rem",
    cursor: "pointer",
    transition: "all 0.3s",
    backgroundColor: disabled
      ? darkMode
        ? "#2C2C2C"
        : "#f9f9f9"
      : darkMode
      ? "#3A3A3A"
      : "#ffffff",
    color: disabled
      ? "#cccccc"
      : darkMode
      ? themeColors.mainColor.dark
      : themeColors.mainColor.light,
  };

  const labelHoverStyle = {
    borderColor: darkMode
      ? themeColors.mainColor.dark
      : themeColors.mainColor.light,
    backgroundColor: darkMode
      ? themeColors.mainColor.light
      : themeColors.mainColor.dark,
  };

  const previewStyle = {
    marginTop: "1rem",
    width: "100%",
    maxHeight: "12rem",
    borderRadius: "0.5rem",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    marginBottom: "1.5rem",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: disabled
      ? darkMode
        ? themeColors.mainColor.dark
        : themeColors.mainColor.dark
      : darkMode
      ? themeColors.mainColor.dark
      : themeColors.mainColor.DEFAULT,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.3s",
    border: "none",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <button type="submit" disabled={disabled || !file} style={buttonStyle}>
        {disabled ? "Processing..." : "Analyze Image"}
      </button>
      <label
        htmlFor="file-upload"
        style={{
          ...labelStyle,
          ...(disabled ? {} : labelHoverStyle),
        }}
      >
        <span style={{ fontSize: "0.875rem" }}>
          {file ? file.name : "Click to upload an image"}
        </span>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          disabled={disabled}
        />
      </label>

      {preview && (
        <div style={{ marginTop: "1rem", width: "100%" }}>
          <img src={preview} alt="Preview" style={previewStyle} />
        </div>
      )}
    </form>
  );
};

export default FileUpload;
