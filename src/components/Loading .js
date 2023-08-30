import React from "react";
import "./Loading.css"; 

const LoadingPage = ({isTaskLoading}) => {
  const containerClass  = isTaskLoading ? "Loading-task": "loading-container";
  return (
    <div className={containerClass}>
      <div className="loading-icon">⚙️</div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;
