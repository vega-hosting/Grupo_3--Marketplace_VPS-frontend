<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container pl-2 mt-5 mb-5">
            <div class="row">
                <div class="col-10 d-flex justify-content-center align-items-center bg-custom">
                    <div class="col-md-10 p-3">
                        <form @submit.prevent="updateUser">
                            <div class="row p-custom">
                                <div class="col-md-6">
                                    <!--Nombre completo del usuario-->
                                    <div class="mb-3">
                                        <label>Nombre completo</label>
                                        <br>
                                        <input type="text" class="p-2" v-model="nameUser" placeholder="Nombre completo"
                                            required>
                                    </div>
                                    <!--Email del usuario-->
                                    <div class="mb-3">
                                        <label>Correo electrónico</label>
                                        <br>
                                        <input type="email" class="p-2" placeholder="Ej: nombre@dominio.com"
                                            v-model="emailUser" required>
                                    </div>
                                    <!--N° de telefono-->
                                    <div class="mb-3">
                                        <label>N° Telefonico</label>
                                        <br>
                                        <input type="tel" class="p-2" placeholder="Ej: +1 111 111 1111"
                                            pattern="\+\d{1,3}\s?\d{3}\s?\d{3}\s?\d{3,4}" v-model="telUser" required>
                                    </div>
                                    <!--Nombre de la compañia asociada al usuario-->
                                    <div class="mb-3">
                                        <label>
                                            Nombre de la compañía (Opcional)
                                        </label>
                                        <br>
                                        <input type="text" class="p-2" placeholder="Nombre de la compañia"
                                            v-model='nameCompany'>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <!--Ciudad del usuario-->
                                    <div class="mb-3">
                                        <label>Ciudad</label>
                                        <br>
                                        <input type="text" class="p-2" placeholder="Ciudad" v-model="cityUser" required>
                                    </div>
                                    <!--Direccion del usuario-->
                                    <div class="mb-3">
                                        <label>Dirección</label>
                                        <br>
                                        <input type="text" class="p-2" v-model="addressUser" placeholder="Dirección"
                                            required>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <button type="submit" class="btn btn-light m-4" id="update-button">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-about-us">
            <MainAboutUs />
        </div>
    </div>
</template>

<style scoped>
.bg-custom {
    background: linear-gradient(#0084FF, #0084FF, #0AD3FF);
    border-radius: 30px;
}

input {
    width: 90%;
    border: none;
    border-radius: 5px;
}

label {
    color: white;
    font-weight: 600;
    font-size: large;
}

.p-custom {
    padding: 24px 4px 24px 4px;
}

.pl-2 {
    padding-left: 11%;
}

#update-button {
    color: #07155E;
    border: none;
    font-weight: 700;
    font-size: large;
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

#update-button:hover {
    background-color: #07155E;
    color: white;
    border: none;
    font-weight: 700;
    font-size: large;
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>

<script setup>
import UserNavbar from '@/components/UserNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';

import axios from 'axios';
import { ref } from 'vue';

const user = ref('');

const nameUser = ref('');
const emailUser = ref('');
const telUser = ref('');
const nameCompany = ref('');
const cityUser = ref('');
const addressUser = ref('');

try {
    const response = await axios.get(`http://localhost:3000/user/${localStorage.user}`);
    user.value = response.data;
    nameUser.value = user.value.name;
    emailUser.value = user.value.email;
    telUser.value = user.value.telephone;
    nameCompany.value = user.value.name_company;
    cityUser.value = user.value.city;
    addressUser.value = user.value.address
} catch (error) {
    console.error('Error al obtener los datos', error);
    alert('Ocurrio un error al obtener los datos del usuario');
}

async function updateUser() {
    try {
        const newUser = {
            name: nameUser.value,
            email: emailUser.value,
            telephone: telUser.value,
            name_company: nameCompany.value,
            city: cityUser.value,
            address: addressUser.value,
            password: user.value.password
        };

        await axios.put(`http://localhost:3000/user/${user.value.id}`,newUser);
        window.location.reload();
    } catch (error) {
        console.error('Error al enviar los datos', error);
        alert('Ocurrio un error al actualizar la información del usuario');
    }
}
</script>