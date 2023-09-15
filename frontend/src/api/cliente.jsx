
import axios from "axios";

const BASE_URL = "http://localhost:3000";
const CLIENTE_ENDPOINT = `${BASE_URL}/clientes`;

export const getAllClientes = async () => {
  try {
    const response = await axios.get(CLIENTE_ENDPOINT);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching clientes:", error);
  }
};

export const getClienteById = async (id) => {
  try {
    const response = await axios.get(`${CLIENTE_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching cliente by ID:", error);
  }
};

export const createCliente = async (cliente) => {
  try {
    const response = await axios.post(CLIENTE_ENDPOINT, cliente);
    return response.data;
  } catch (error) {
    throw new Error("Error creating cliente:", error);
  }
};

export const updateCliente = async (id, updatedCliente) => {
  try {
    const response = await axios.put(
      `${CLIENTE_ENDPOINT}/${id}`,
      updatedCliente
    );
    return response.data;
  } catch (error) {
    throw new Error("Error updating cliente:", error);
  }
};

export const deleteCliente = async (id) => {
  try {
    await axios.delete(`${CLIENTE_ENDPOINT}/${id}`);
  } catch (error) {
    throw new Error("Error deleting cliente:", error);
  }
};
