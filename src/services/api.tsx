// import axios from "axios";

// const API_KEY = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
// const API_URL = "https://api.airtable.com/v0/app4Fn5LIMlVBvrA3";

// const getData = async () => {
//   axios.defaults.headers = {
//     "Content-Type": "application/json",
//     Authorization: API_KEY,
//   };

//   const res = await axios.get(`${API_URL}/recipes`).catch((error) => {
//     console.log(error);
//   });

//   return res.data;
// };

// const postData = () => {
//   console.log("red");
// };

// const apiRequest = { getData, postData };

// export default apiRequest;

import axios from 'axios';


type Fields = {
    TAKIJEDEN: Array<string>,
    selekty: Array<string>,
    Name: string,
    Notes: string,
    Status: string,
    qwerty: Array<string>,
}

type Records = {
    id: string;
    createdTime: string;
    fields: Fields[];
};

type GetUsersResponse = {
    records: Records[];
};

const API_KEY = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
const API_URL = "https://api.airtable.com/v0/app4Fn5LIMlVBvrA3";

const getData = async () => {
    //   axios.defaults.headers = {
    //     "Content-Type": "application/json",
    //     Accept: 'application/json',
    //     Authorization: API_KEY,
    //   };
    // axios.defaults.headers = {

    // }

    // let config = {
    //     headers: {
    //         Authorization: API_KEY,
    //     }
    //   }

    axios.defaults.headers.common['Authorization'] = API_KEY;

    const res = await axios.get<GetUsersResponse, any>(`${API_URL}/recipes`).catch((error) => {
        console.log(error);
    });

    return res.data;
};

const apiRequest = { getData };

export default apiRequest;