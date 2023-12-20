import axios from "axios";

export default axios.create({
    baseURL :'https://api.rawg.io/api',
    params:{
        key : 'e5e6716f30bf4cb7806e5bf995e5a05a'
    }
})