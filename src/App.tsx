import React, { useEffect } from "react";

// styles
import "./App.css";

// api
import { fetchCountries } from "./api";

// main app component
const App = () => {
  /**
   * Fetch countries
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCountries.fetchAll();
      console.log("the result", result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <p>We got here</p>
    </div>
  );
};

export default App;
