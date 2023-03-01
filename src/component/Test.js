import Reacts, { useEffect, useState } from "react";
import axios from 'axios';

const url="http://localhost:8080/test"

const getRefererAPI = async () => {
    const response = await axios.get(url);
    console.log("response!"+response.data.referer);
    return response.data.referer;
}

export const TestView = () =>{
    const [referer,setReferer] = useState('');
    
    useEffect(()=>{
        const refererResponse = getRefererAPI().then(response=>{
            console.log(response);
            setReferer(response);
        });
        
    },[]);
    
    return (
        <div>
            <p>referer:{referer}</p>
        </div>
    )

}