import axios from 'axios'
 
const api  = axios.create({
    baseURL:'mongodb+srv://Jhonatan:<password>@cluster0-sjcra.mongodb.net/tarifas?retryWrites=true&w=majority',
})
export default api;