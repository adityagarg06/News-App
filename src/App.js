import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { React, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                country="in"
                category="general"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                country="in"
                category="business"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                country="in"
                category="entertainment"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                country="in"
                category="health"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                country="in"
                category="science"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                country="in"
                category="sports"
                setProgress={setProgress}
                apiKey={apiKey}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
