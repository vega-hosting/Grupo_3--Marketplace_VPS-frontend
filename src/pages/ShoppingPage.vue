<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container mt-3 mb-3">
            <div class="row">
                <div class="col-md-9">
                    <!--Info config server-->
                    <div class="col-md-11">
                        <div class="bg-info-server">
                            <p id="info-server">
                                <span class="fw-semibold">Hostname:</span> {{ infoServer.hostname }}
                                <br /><br />
                                <span class="fw-semibold">Sistema operativo:</span> {{ infoServer.os }}
                                <br /><br />
                                <span class="fw-semibold">vCore adicional:</span> {{ infoServer.additionalVcore }}
                                <br /><br />
                                <span class="fw-semibold">Memoria RAM adicional:</span> {{ infoServer.additionalRam }}
                                <br /><br />
                                <span class="fw-semibold">Memoria de almacenamiento adicional:</span> {{
                                    infoServer.additionalStorage }}
                            </p>
                        </div>
                    </div>
                    <!--Facturacion-->
                    <div class="col-md-12 mb-3">
                        <div class="row mt-3">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <div class="check-custom text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="billing"
                                                    v-model="billing" value="1 Mes" />
                                                <label class="form-check-label">1 Mes</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <div class="check-custom text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="billing"
                                                    v-model="billing" value="3 Meses" />
                                                <label class="form-check-label">3 Meses</label>
                                                <p class="mt-2 fw-semibold">Ahorras 8%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <div class="check-custom text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="billing"
                                                    v-model="billing" value="6 Meses" />
                                                <label class="form-check-label">6 Meses</label>
                                                <p class="mt-2 fw-semibold">Ahorras 15%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <div class="check-custom text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="billing"
                                                    v-model="billing" value="12 Meses" />
                                                <label class="form-check-label">12 Meses</label>
                                                <p class="mt-2 fw-semibold">Ahorras 25%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Info plan VPS-->
                <div class="col-md-3">
                    <div class="p-3 bg-info-plan">
                        <div class="p-4">
                            <div class="text-center">
                                <img src="../assets/carrito.png" class="img-fluid" id="cart-shop" />
                            </div>
                            <br>
                            <div>
                                <h4 class="text-center fw-semibold">Plan: {{ plan.name }}</h4>
                                <ul>
                                    <li>vCore: {{ plan.vcore }}</li>
                                    <li>RAM: {{ plan.ram }} GB</li>
                                    <li>Espacio: {{ plan.storage }} GB SSD</li>
                                    <li>Velocidad: {{ plan.bus }} Mbit/s</li>
                                </ul>
                            </div>
                            <div class="text-center">
                                <img src="../assets/Icono plan.png" class="img-fluid" id="icon" />
                            </div>
                            <br>
                            <h4 class="text-center fw-semibold">Total: $ {{ calculatePrice(billing) }} CLP</h4>
                            <div class="text-center">
                                <button @click="purchasePlan" class="btn btn-light"
                                    id="purchase-button">Comprar</button>
                            </div>
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
.bg-info-server {
    background: linear-gradient(#53C4FF, #7BC5EB);
    width: 100%;
    border-radius: 10px;
}

.bg-info-plan {
    background-color: #46BFFF;
    width: 100%;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
}

#info-server {
    padding: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: larger;
}

.check-custom {
    background-color: #07155E;
    color: white;
    width: 100%;
    height: 100%;
    padding: 25px;
    border-radius: 35px;
    font-family: Arial, Helvetica, sans-serif;
}

#cart-shop {
    height: 20%;
    width: 30%;
}

#icon {
    height: 100%;
    width: 50%;
}

#purchase-button {
    color: #07155E;
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
    font-weight: 700;
    border-radius: 25px;
}
</style>

<script setup>
import UserNavbar from '@/components/UserNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPlanById, createSubscription } from "@/services/service.js"

const router = useRouter();

const idPlan = sessionStorage.plan;
const infoServer = JSON.parse(sessionStorage.getItem('configVps'));
const user = sessionStorage.user;

const billing = ref('1 Mes');
const plan = ref('');

plan.value = await getPlanById(idPlan);

const priceVcoreAdd = () => {
    switch (infoServer.additionalVcore) {
        case "Ninguno":
            return 0;

        case "1vCore $3.000 CLP":
            return 3000;

        case "2vCore $6.000 CLP":
            return 6000;

        case "3vCore $9.000 CLP":
            return 9000;
    }
}

const priceRamAdd = () => {
    switch (infoServer.additionalRam) {
        case "Ninguno":
            return 0;

        case "2 GB $2.000 CLP":
            return 2000;

        case "4 GB $4.000 CLP":
            return 4000;

        case "6 GB $6.000 CLP":
            return 6000;
    }
}

const priceStorageAdd = () => {
    switch (infoServer.additionalStorage) {
        case "Ninguno":
            return 0;

        case "25 GB $2.000 CLP":
            return 2000;

        case "50 GB $4.000 CLP":
            return 4000;

        case "100 GB $8.000 CLP":
            return 8000;
    }
}

const calculatePrice = (billing) => {
    let discount = 0;
    let moths = 0;

    switch (billing) {
        case "1 Mes":
            discount = 0;
            moths = 1;
            break;
        case "3 Meses":
            discount = 0.08;
            moths = 3;
            break;
        case "6 Meses":
            discount = 0.15;
            moths = 6
            break;
        case "12 Meses":
            discount = 0.25;
            moths = 12;
            break;
    }

    const initialPrice = plan.value.price + priceVcoreAdd() + priceRamAdd() + priceStorageAdd();

    const finalPrice = initialPrice * moths * (1 - discount);
    return Math.round(finalPrice);
}

async function purchasePlan() {
    const infoPurchase = {
        time: billing.value,
        price: calculatePrice(billing.value),
        hostname: infoServer.hostname,
        os: infoServer.os,
        passAdmin: infoServer.passAdmin,
        additionalVcore: infoServer.additionalVcore,
        additionalRam: infoServer.additionalRam,
        additionalStorage: infoServer.additionalStorage,
        id_plan: plan.value.id,
        id_user: user
    };

    await createSubscription(infoPurchase);

    router.push({ path: '/shopping/success' });

}
</script>