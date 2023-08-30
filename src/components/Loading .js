import React from "react";
import "./Loading.css"; // Import your custom CSS for styling the loader

const LoadingPage = ({isTaskLoading}) => {
  // const isTaskLoading = false;
  const containerClass  = isTaskLoading ? "Loading-task": "loading-container";
  return (
    <div className={containerClass}>
      <div className="loading-icon">⚙️</div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;
