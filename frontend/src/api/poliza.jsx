import axios from "axios";

const BASE_URL = "http://localhost:3000";
const POLIZA_ENDPOINT = `${BASE_URL}/polizas`;

export const getAllPolizas = async () => {
  try {
    const response = await axios.get(POLIZA_ENDPOINT);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching polizas:", error);
  }
};

export const getPolizaById = async (id) => {
  try {
    const response = await axios.get(`${POLIZA_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching poliza by ID:", error);
  }
};

export const createPoliza = async (poliza) => {
  try {
    const response = await axios.post(POLIZA_ENDPOINT, poliza);
    return response.data;
  } catch (error) {
    throw new Error("Error creating poliza:", error);
  }
};

export const updatePoliza = async (id, updatedPoliza) => {
  try {
    const response = await axios.put(`${POLIZA_ENDPOINT}/${id}`, updatedPoliza);
    return response.data;
  } catch (error) {
    throw new Error("Error updating poliza:", error);
  }
};

export const deletePoliza = async (id) => {
  try {
    await axios.delete(`${POLIZA_ENDPOINT}/${id}`);
  } catch (error) {
    throw new Error("Error deleting poliza:", error);
  }
};

export const addVehiclesToPoliza = async (id, vehiculos) => {
  try {
    const response = await axios.put(`${POLIZA_ENDPOINT}/${id}/vehiculos`, {
      vehiculos,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error adding vehicles to poliza:", error);
  }
};
