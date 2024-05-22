<template>
    <section class="page-container pl-2">
        <div class="container m-auto">
            <div class="row">
                <div class="col-10 d-flex justify-content-center align-items-center bg-custom">
                    <div class="col-md-10 p-3">
                        <form @submit.prevent="registerUser">
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
                                    <!--contraseña del usuario-->
                                    <div class="mb-3">
                                        <label>Contraseña</label>
                                        <br>
                                        <input type="password" class="p-2" v-model="passwordUser" required>
                                    </div>
                                    <!--confirmacion de la contraseña del usuario-->
                                    <div class="mb-3">
                                        <label>
                                            Confirmar contraseña
                                        </label>
                                        <br>
                                        <input type="password" class="p-2" v-model="passConfirm" required>
                                    </div>
                                    <p v-if="passwordUser !== passConfirm" class="pass-dont-match">
                                        Las contraseñas no coinciden.
                                    </p>
                                    <p v-if="passwordUser === passConfirm" class="pass-match">
                                        Las contraseñas coinciden.
                                    </p>
                                </div>
                            </div>
                            <div class="col">
                                <button type="submit" class="btn btn-light m-4"
                                    id="registration-button">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
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

.pass-dont-match {
    background-color: rgb(180, 0, 36);
    color: white;
    font-size: large;
    font-weight: 700;
    padding: 12px;
    border-radius: 10px;
    width: 90%;
}

.pass-match {
    background-color: green;
    color: white;
    font-size: large;
    font-weight: 700;
    padding: 12px;
    border-radius: 10px;
    width: 90%;
}

#registration-button {
    color: #07155E;
    border: none;
    font-weight: 700;
    font-size: large;
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

#registration-button:hover {
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


<!--Parte Logica-->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createUser } from '@/services/service.js';

const router = useRouter();

const nameUser = ref('');
const emailUser = ref('');
const telUser = ref('');
const nameCompany = ref('');
const cityUser = ref('');
const addressUser = ref('');
const passwordUser = ref('');
const passConfirm = ref('');

async function registerUser() {
    if (passwordUser.value === passConfirm.value) {
        const newUser = {
            name: nameUser.value,
            email: emailUser.value,
            telephone: telUser.value,
            name_company: nameCompany.value,
            city: cityUser.value,
            address: addressUser.value,
            password: passwordUser.value
        };

        await createUser(newUser);

        router.push({ path: '/' });
    } else {
        alert('Las contraseñas no coinciden. Por favor, verifique que las contraseñas sean iguales.');
    }
}
</script>