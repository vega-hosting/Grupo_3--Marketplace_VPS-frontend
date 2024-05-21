<template>
    <div>
        <UserNavbarAdmin />

        <div class="container-fluid">
            <div class="row text-center">
                <!-- contenedor opciones -->
                <div class="col-md-3 rounded-4" id="container">
                    <img src="../assets/settings.png" id="img-setting" class="img-fluid">

                    <router-link to="/adminStock" class="btn fw-bold btn-light rounded-4 btn-option">Ver
                        Stock</router-link>
                    <br>
                    <br>
                    <router-link to="/opcion2" class="btn fw-bold btn-light rounded-4 btn-option">Opción 2</router-link>
                    <br>
                    <br>
                    <router-link to="/opcion3" class="btn fw-bold btn-light rounded-4 btn-option">Opción 3</router-link>
                    <br>
                    <br>
                    <router-link to="/adminGestion" class="btn fw-bold btn-light rounded-4 btn-option">Gestión
                        Usuario</router-link>
                </div>
                <!-- contenedor stock -->
                <div class="col rounded-4 fw-bold" id="container">
                    <div class="row">
                        <div class="col text-center">
                            <div id="tittle">
                                <p>Stock</p>
                            </div>
                        </div>
                        <!-- opción agregar un nuevo servidor -->
                        <div class="col text-right">
                            <router-link to="/addPlan">
                                <img src="../assets/agregar-simbolo.png" alt="Imagen agregar" id="add-product">
                            </router-link>
                        </div>
                    </div>
                    <!--mostrar cartas planes mediante el uso del consumo de archivo .json-->
                    <div class="row" id="cards">
                        <div v-for="plan in plans" :key="plan.id" class="col-md-4 mb-3">
                            <div class="card" id="tittle-plan">
                                <div class="card-body">
                                    <h5 class="card-title">{{ plan.name }} ({{ plan.stock }})</h5>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <ul>
                                        <li>vCore: {{ plan.vcore }}</li>
                                        <li>RAM: {{ plan.ram }} GB</li>
                                        <li>Espacio: {{ plan.storage }} GB SSD</li>
                                        <li>Velocidad: {{ plan.bus }} Mbit/s</li>
                                    </ul>
                                </div>
                                <div class="text-center">
                                    <img src="../assets/Icono plan.png" alt="imagen de servidor" class="img-fluid"
                                        id="icono">
                                </div>
                                <p id="price">${{ plan.price }} CLP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-about-us">
            <MainAboutUsAdmin />
        </div>
    </div>
</template>

<script setup>
import MainAboutUsAdmin from '@/components/MainAboutUsAdmin.vue';
import UserNavbarAdmin from '@/components/UserNavbarAdmin.vue';
import axios from 'axios';
import { ref } from 'vue';

const plans = ref([]);
//consumo de api local .json y llamado de datos planes
try {
    const response = await axios.get('http://localhost:3000/plans');
    plans.value = response.data;
} catch (error) {
    console.error('Error al obtener los datos de los planes', error);
    alert('Ocurrió un error al obtener los datos de los planes');
}

</script>

<style scoped>
#container {
    background: linear-gradient(#00ff5e8c, #00ff0031);
    padding: 50px;
    margin: 10px;
}

#cards {
    margin-top: 3%;
    margin-bottom: 2%;
}

#tittle {
    background-color: #f0f0f0;
    border-radius: 25px;
    max-width: 40%;
    position: relative;
    left: 80%;
}

.btn-option {
    width: 200px;
    margin: 10px;
}

#img-setting {
    width: 100%;
    position: relative;
    left: -1rex;
    margin-bottom: 50px;
}

#add-product {
    width: 60px;
    position: relative;
    bottom: 15px;
    left: 40%;
}

#tittle-plan {
    background-color: #075e28;
    color: rgb(255, 255, 255);
    font-weight: 600;
}

#price {
    background-color: rgba(144, 238, 144, 0.4);
    border-radius: 25px;
    padding: 5px 10px;
    margin-top: 10px;
    max-width: 50%;
    position: relative;
    left: 5rem;
}

#icono {
    width: 10rem;
}
</style>