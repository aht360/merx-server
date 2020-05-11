import axios from 'axios'
 
const api  = axios.create({
    baseURL:'https://backendmerx.herokuapp.com/',
})
export default api;