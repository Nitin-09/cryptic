import ApiContext from "./ApiContext"
import { useEffect, useState } from "react";

const ApiState = (props) => {
    const [data, setData] = useState([]);
    const [value, setvalue] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then((response) => response.json())
            .then((actualData) => setData(actualData));
    }, []);
    const fetchid =(id) => {
        for (let index = 0; index < data.length; index++) {
            const ele = data[index];
            if(parseInt(ele.show.id)===parseInt(id)){
                setvalue(ele)
            }

            
        }
    }
    return (
        <ApiContext.Provider value={{ data, fetchid,value}}>
            {props.children}
        </ApiContext.Provider>
    )
}
export default ApiState