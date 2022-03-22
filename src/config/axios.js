import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export default  clienteAxios;