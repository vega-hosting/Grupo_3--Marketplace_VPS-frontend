import axios from "axios";

const API_URL = "http://localhost:8081/v1/api";

// Users

//POST

export const createUser = async (newUser) => {
    try {
        await axios.post(`${API_URL}/users`, newUser);
    } catch (error) {
        console.error("Error al crear al usuario", error);
        alert("Ocurrio un error al registrar al usuario");
    }
};

//GET

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos del usuario");
    }
};

export const getUserById = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/users/${idUser}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        alert("Ocurrio un error al obtener los datos del usuario");
    }
};

// PUT

export const updateUser = async (idUser, newData) => {
    try {
        await axios.put(`${API_URL}/users/${idUser}`, newData);
    } catch (error) {
        console.error('Error al cambiar los datos', error);
        alert('Ocurrio un error al actualizar la información del usuario');
    }
};

// DELETE

export const deleteUserById = async (idUser) => {
    try {
        await axios.delete(`${API_URL}/users/${idUser}`);
    } catch (error) {
        console.error("Error al eliminar al usuario", error);
        alert("Ocurrio un error al eliminar los datos del usuario");
    }
};
// Plans

// POST
export const createPlan = async (newPlan) => {
    try {
        await axios.post(`${API_URL}/plans`,newPlan);
    } catch (error) {
        console.error('Error al crear el plan', error);
        alert('Ocurrio un error al registrar el plan');
    }
}

// GET USER
export const getPlansForUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/plans/user`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de los planes', error);
        alert('Ocurrio un error al obtener los datos de los planes');
    }
}

//GET USER ADMIN
export const getPlansForAdmin = async () => {
    try {
        const response = await axios.get(`${API_URL}/plans/admin`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de los planes', error);
        alert('Ocurrio un error al obtener los datos de los planes');
    }
}

export const getPlanForUserById = async (idPlan) => {
    try {
        const response = await axios.get(`${API_URL}/plans/user/plan/${idPlan}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos del plan', error);
        alert('Ocurrio un error al obtener los datos del plan');
    }
}

// PUT

export const updatePlan = async (newData) => {
    try {
        await axios.put(`${API_URL}/plans`, newData);
    } catch (error) {
        console.error('Error al cambiar los datos', error);
        alert('Ocurrio un error al actualizar la información del plan');
    }
}

export const reduceQuantityPlan = async (idPlan) => {
    try {
        await axios.put(`${API_URL}/plans/user/${idPlan}/reduce-quantity`);
    } catch (error) {
        console.error('Error al cambiar los datos', error);
        alert('Ocurrio un error al actualizar la información del plan');
    }
}

// DELETE

export const deletePlanById = async (idPlan) => {
    try {
        await axios.delete(`${API_URL}/plans/${idPlan}`);
    } catch (error) {
        console.error('Error al eliminar el plan', error);
        alert('Ocurrio un error al eliminar el plan de la base de datos');
    }
}

// Subscriptions

// POST
export const createSubscription = async (infoSubs) => {
    try {
        await axios.post(`${API_URL}/subscriptions`, infoSubs);
    } catch (error) {
        console.error('Error al registrar la compra', error);
        alert('Ocurrio un error al registrar la compra');
    }
};

// GET

export const getSubscriptionByIdUser = async (idUser) => {
    try {
        const response = await axios.get(`${API_URL}/subscriptions/user/${idUser}`);
        return response.data;
    } catch (error) { 
        console.error('Error al obtener los datos', error);
        alert('Ocurrio un error al obtener los datos');
    }
};