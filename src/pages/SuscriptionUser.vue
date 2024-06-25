<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container m-auto">
            <div class="row">
                <div class="col-10 justify-content-center align-items-center bg-custom">
                    <div class="col-md-10 p-3">
                        <h2 class="text-white mb-3">Suscripciones</h2>
                        <h4 v-if="suscriptions.length === 0" class="text-white m-5 text-center">No tienes suscripciones
                            por el momento</h4>
                        <div v-for="suscription in suscriptions" :key="suscription.id"
                            class="col-md-3 d-inline-flex m-2">
                            <div class="card card-custom">
                                <div class="card-header text-center" id="titulo-plan"> <strong>Tipo:</strong> {{
                                    suscription.name }}</div>
                                <div class="card-body" id="desc-plan">
                                    <ul>
                                        <li><strong>Hostname:</strong> {{ suscription.hostname }}</li>
                                        <li><strong>Sistema Operativo:</strong> {{ suscription.os }}</li>

                                        <li v-if="suscription.addVcore === 'Ninguno'"><strong>vCore:</strong> {{
                                            suscription.vcore }} </li>
                                        <li v-else><strong>vCore:</strong> {{ suscription.vcore }} + {{
                                            vcoreAdd(suscription) }} vCore adicional</li>

                                        <li v-if="suscription.addRam === 'Ninguno'"><strong>RAM:</strong> {{
                                            suscription.ram }} GB</li>
                                        <li v-else><strong>RAM:</strong> {{ suscription.ram }} + {{
                                            ramAdd(suscription) }} GB adicional</li>

                                        <li v-if="suscription.addStorage === 'Ninguno'"><strong>Espacio:</strong>
                                            {{ suscription.storage }} GB SSD</li>
                                        <li v-else><strong>Espacio:</strong> {{ suscription.storage }} +
                                            {{ storageAdd(suscription) }} GB adicional</li>

                                        <li><strong>Velocidad:</strong> {{ suscription.bus }} Mbit/s</li>
                                    </ul>
                                    <h5>Duracion: {{ suscription.duration }}</h5>
                                    <h5>Total: $ {{ suscription.price }} CLP</h5>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="col">
                            <button @click="returnPrevPag" class="btn btn-light mt-4 mb-4"
                                id="back-button">Volver</button>
                        </div>
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
    background: linear-gradient(#0084ff, #0ad3fe);
    border-radius: 25px;
    margin: 5% 9%;
}

#titulo-plan {
    background-color: #07155E;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

.card-custom {
    border: 1px solid black;
}

#desc-plan {
    background-color: rgba(10, 211, 255, 0.3);
}

#back-button {
    color: #07155E;
    border: none;
    font-weight: 700;
    font-size: large;
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

#back-button:hover {
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

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getSubscriptionByIdUser } from "@/services/service.js";

const router = useRouter();

const suscriptions = ref([]);

suscriptions.value = await getSubscriptionByIdUser(sessionStorage.userId);

console.log(suscriptions)

const vcoreAdd = (suscription) => {
    switch (suscription.addVcore) {
        case "1vCore $3.000 CLP":
            return 1;

        case "2vCore $6.000 CLP":
            return 2;

        case "3vCore $9.000 CLP":
            return 3;
    }
}

const ramAdd = (subscription) => {
    switch (subscription.addRam) {
        case "2 GB $2.000 CLP":
            return 2;

        case "4 GB $4.000 CLP":
            return 4;

        case "6 GB $6.000 CLP":
            return 6;
    }
}

const storageAdd = (subscription) => {
    switch (subscription.addStorage) {
        case "25 GB $2.000 CLP":
            return 25;

        case "50 GB $4.000 CLP":
            return 50;

        case "100 GB $8.000 CLP":
            return 100;
    }
}

function returnPrevPag() {
    router.back();
}
</script>