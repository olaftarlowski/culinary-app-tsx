import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as api } from "./services/api";
import { AxiosResponse } from "axios";
import "./App.css";
import { DataList, TextField } from "./components/";
import Counter from "./components/Counter";

const App = () => {
  const [airtableData, setAirtableData] = useState<AxiosResponse | null>(
    null
  );

  const [someVal, setSomeVal] = useState<string>("");

  const getDataHandler = () => {
    api.getData().then((data) => setAirtableData(data.records));
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const asd = () => {
    console.log(airtableData);
  };

  const getVal = () => {
    console.log("red");
  };

  return (
    <Router>
      <div className="App">
        <h2>App component</h2>
        <button onClick={asd}>lik</button>
        <p>VAL ON CHANGE: {someVal}</p>
        <Counter text="asd" />
        <TextField
          handleChange={(e) => setSomeVal(e.target.value)}
          somePerson={{ firstName: "andrzej", lastName: "kopyto" }}
          someText={"jakis telst"}
          ok={true}
          num={4}
          newFnc={getVal}
        />
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
