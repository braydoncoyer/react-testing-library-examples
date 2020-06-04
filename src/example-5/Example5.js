import React, {useState} from 'react';
import axios from 'axios';

const TestAxios = ({url}) => {

    const [data, setData] = useState();

    const fetchData = async () => {
        const response = await axios.get(url);
        setData(response.data.greeting);
    };

    return (
        <>
            <button data-testid="button" onClick={fetchData}>Load Data</button>
            {
                data
                    ? <div data-testid="data">{data}</div>
                    : <h1 data-testid="loading-text">Loading...</h1>
            }
        </>
    )
};

export default TestAxios;
