import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataList from "./components/DataList";
import { default as api } from "./services/api";
import  { AxiosResponse } from "axios";
import "./App.css";

const App = () => {
  const [airtableData, setAirtableData] = useState<AxiosResponse | null | void>(null);

  const getDataHandler = () => {
    api.getData().then((data) => setAirtableData(data));
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const asd = () => {
    console.log(airtableData)
  }

  return (
    <Router>
      <div className="App">
        <h2>App component</h2>
        <button onClick={asd}>lik</button>
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