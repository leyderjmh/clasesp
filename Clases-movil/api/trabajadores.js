// api/trabajadores.js
import apiClient from './config';

export const getAllTrabajadores = async () => {
  try {
    const response = await apiClient.get('https://5c36d0e5-e9b6-4bb0-888f-e57d6f571338-00-2i7rz9xf7vcjb.picard.replit.dev/api/trabajadores');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const getTrabajador = async (id) => {
  try {
    const response = await apiClient.get(`https://5c36d0e5-e9b6-4bb0-888f-e57d6f571338-00-2i7rz9xf7vcjb.picard.replit.dev/api/trabajadores/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const createTrabajador = async (data) => {
  try {
    const response = await apiClient.post('https://5c36d0e5-e9b6-4bb0-888f-e57d6f571338-00-2i7rz9xf7vcjb.picard.replit.dev/api/trabajadores', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const updateTrabajador = async (id, data) => {
  try {
    const response = await apiClient.put(`https://5c36d0e5-e9b6-4bb0-888f-e57d6f571338-00-2i7rz9xf7vcjb.picard.replit.dev/api/trabajadores/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const deleteTrabajador = async (id) => {
  try {
    const response = await apiClient.delete(`https://5c36d0e5-e9b6-4bb0-888f-e57d6f571338-00-2i7rz9xf7vcjb.picard.replit.dev/api/trabajadores/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Método para obtener trabajadores por departamento
export const getTrabajadoresByDepartamento = async (departamentoId) => {
  try {
    const response = await apiClient.get(`https://5c36d0e5-e9b6-4bb0-888f-e57d6f571338-00-2i7rz9xf7vcjb.picard.replit.dev/api/trabajadores/departamentos`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};