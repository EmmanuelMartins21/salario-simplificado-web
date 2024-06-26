import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api'; // Substitua pelo URL base da sua API

export const sendFormData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw new Error('Deu Ruim aqui oh: ' + error);
  }
};