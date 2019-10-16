import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.31.174:3333', //esse é o ip da Máquina, caso seja trocado o IP, é necessário alterar no código.
}); 

export default api;