import axios from "axios";

export default axios.create({
    baseURL :'https://api.rawg.io/api',
    params:{
        key : 'f7f64ed443694b23ac8686a6e615423f'
    }
})