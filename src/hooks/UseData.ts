import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";

interface FetchResponses<T>{
    count : number;
    results : T[];

}
function UseData <T>(endpoint : string,requestConfig?: AxiosRequestConfig, deps?:any[]){
    const [data,setData] = useState<T[]>([])
    const [error,setError] = useState('')
    const [isloading , setisLoading] = useState(false)

    useEffect(() =>{
        const Controller = new AbortController();
        setisLoading(true)
        apiClient.get<FetchResponses<T>>(endpoint,{signal: Controller.signal, ...requestConfig})
            .then((res) => {
                setData(res.data.results)
                setisLoading(false)
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message)}
            )
        return () => Controller.abort()
    },deps ? [...deps] : [])
    return {data,error,isloading}

}

export default UseData