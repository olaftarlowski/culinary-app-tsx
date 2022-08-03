import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as api, Records } from "./services/api";
// import { AxiosResponse } from "axios";
import { DataList } from "./components/";
import "./App.css";


const App = () => {
  const [airtableData, setAirtableData] = useState<Array<Records>>([]);

  const getDataHandler = () => {
    api.getData().then((data) => setAirtableData(data.records));
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const checkAirtableData = () => {
    console.log(airtableData);
  };

  return (
    <Router>
      <div className="App">
        <h2>App component</h2>
        <button onClick={checkAirtableData}>check</button>
        <div>
          <Routes>
            <Route path="/" element={<DataList data={airtableData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
