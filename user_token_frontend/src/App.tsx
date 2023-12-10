import { useState } from "react";
import SurveyForm from "./SurveyForm";
import "./App.css";

const App = () => {
  const [token, setToken] = useState("");

  const handleTokenGenerated = (generatedToken: string) => {
    setToken(generatedToken);
  };

  const handleBackClick = () => {
    setToken("");
  };

  return (
    <div className="app-container">
      {!token ? (
        <div className="form-container">
          <h1>Token Generation Web Application</h1>
          <SurveyForm onTokenGenerated={handleTokenGenerated} />
        </div>
      ) : (
        <div className="token-container">
          <h2>
            Your token is <p className="token-display">{token}</p>
          </h2>
          <button onClick={handleBackClick}>Back</button>
        </div>
      )}
    </div>
  );
};

export default App;
