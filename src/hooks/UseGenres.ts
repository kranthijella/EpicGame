
import useData from "./UseData.ts";

export interface Genre{
    id : number;
    name : string
    image_background : string;
}

const UseGenres = ( ) => useData<Genre>('/genres')
export default UseGenres