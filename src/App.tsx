import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { default as api, Records } from "./services/api";
// import { AxiosResponse } from "axios";
import { DataList } from "./components/";
import "./App.css";

// const SAMPLE_RESPONSE = {
//   "records": [
//     {
//       "id": "recmuG4HckO4ox35Y",
//       "createdTime": "2022-07-31T19:45:35.000Z",
//       "fields": {
//         "TAKIJEDEN": [
//           "recmuG4HckO4ox35Y",
//           "rec3g2pR0GIWnl5OF",
//           "rec6kVf4m6y8XGVDb"
//         ],
//         "selekty": [
//           "select 1"
//         ],
//         "Name": "1st wpis",
//         "Notes": "description",
//         "Status": "2022-07-31T19:45:35.000Z",
//         "qwerty": [
//           "1st wpis",
//           "dsfgsdfg",
//           "dfgsdf"
//         ]
//       }
//     }
//   ],
//   "offset": "itrWgkmdaIpR9s3cH/rec3g2pR0GIWnl5OF"
// }


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
