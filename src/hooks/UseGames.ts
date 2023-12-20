import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

export interface Platform {
    id : number;
    name : string;
    slug : string;
}
export interface Game{
    id : number;
    name : string;
    background_image: string;
    parent_platforms : {
       platform : Platform
    }[];
}
interface FetchResponse{
    count : number;
    results : Game[];

}
function useGames(){
    const [games,setGames] = useState<Game[]>([])
    const [error,setError] = useState('')

    useEffect(() =>{
        const Controller = new AbortController();

        apiClient.get<FetchResponse>('/games',{signal: Controller.signal})
            .then(res => setGames(res.data.results))
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message)}
            )
        return () => Controller.abort()
    },[])
    return {games,error}
}

export default useGames