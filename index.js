import React from "react";
import ReactDOM from "react-dom";
import App from "main/App";
import "main/index.css"; // Ensure this exists or remove if unnecessary

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ ERROR: <div id='root'> NOT FOUND!");
} else {
  try {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootElement
    );
    console.log("✅ React App Rendered!");
  } catch (error) {
    console.error("❌ ERROR in React Rendering:", error);
  }
}
