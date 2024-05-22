import axios from "axios";

const API_URL = "http://localhost:3000";

// Users

export const createUser = async (newUser) => {
    try {
        await axios.post(`${API_URL}/user`, newUser);
    } catch (error) {
        console.error("Error al crear al usuario", error);
        alert("Ocurrio un error al registrar al usuario");
    }
};

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos del usuario");
    }
};

export const getUserById = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/user/${idUser}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos del usuario");
    }
};

export const updateUser = async (idUser, newData) => {
    try {
        await axios.put(`${API_URL}/user/${idUser}`, newData);
    } catch (error) {
        console.error('Error al cambiar los datos', error);
        alert('Ocurrio un error al actualizar la información del usuario');
    }
};

export const deleteUserById = async (idUser) => {
    try {
        await axios.delete(`${API_URL}/user/${idUser}`);
    } catch (error) {
        console.error("Error al eliminar al usuario", error);
        alert("Ocurrio un error al eliminar los datos del usuario");
    }
};
// Plans

export const createPlan = async (newPlan) => {
    try {
        await axios.post(`${API_URL}/plans`,newPlan);
    } catch (error) {
        console.error('Error al crear el plan', error);
        alert('Ocurrio un error al registrar el plan');
    }
}

export const getPlans = async () => {
    try {
        const response = await axios.get(`${API_URL}/plans`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de los planes', error);
        alert('Ocurrio un error al obtener los datos de los planes');
    }
}

export const getPlanById = async (idPlan) => {
    try {
        const response = await axios.get(`${API_URL}/plans/${idPlan}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos del plan', error);
        alert('Ocurrio un error al obtener los datos del plan');
    }
}

export const updatePlan = async (idPlan, newData) => {
    try {
        await axios.put(`${API_URL}/plans/${idPlan}`, newData);
    } catch (error) {
        console.error('Error al cambiar los datos', error);
        alert('Ocurrio un error al actualizar la información del plan');
    }
}

export const deletePlanById = async (idPlan) => {
    try {
        await axios.delete(`${API_URL}/plans/${idPlan}`);
    } catch (error) {
        console.error('Error al eliminar el plan', error);
        alert('Ocurrio un error al eliminar el plan de la base de datos');
    }
}

// Subscriptions

export const createSubscription = async (infoSubs) => {
    try {
        await axios.post(`${API_URL}/subscription`, infoSubs);
    } catch (error) {
        console.error('Error al registrar la compra', error);
        alert('Ocurrio un error al registrar la compra');
    }
};

export const getSubscriptionByIdUser = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/subscription?id_user=${idUser}`);
        return response.data;
    } catch (error) { 
        console.error('Error al obtener los datos', error);
        alert('Ocurrio un error al obtener los datos');
    }
};