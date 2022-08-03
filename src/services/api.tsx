import axios from 'axios';


export interface Fields {
    TAKIJEDEN: Array<string>,
    selekty: Array<string>,
    Name: string,
    Notes: string,
    Status: string,
    qwerty: Array<string>,
}

export interface Records {
    id: string;
    createdTime: string;
    fields: Fields;
};

interface GetDataResponse {
    records: Records[];
};

const API_KEY: string = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
const API_URL: string = "https://api.airtable.com/v0/app4Fn5LIMlVBvrA3";

const getData = async () => {

    axios.defaults.headers.common['Authorization'] = API_KEY;

    const res = await axios.get<GetDataResponse, any>(`${API_URL}/recipes`).catch((error) => {
        console.log(error);
    });

    return res.data;
};

const apiRequest = { getData };

export default apiRequest;