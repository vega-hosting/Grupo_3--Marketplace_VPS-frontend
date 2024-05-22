<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container-fluid">
            <div class="row justify-content-center p-5">
                <div v-for="plan in plans" :key="plan.id" class="col-md-3 mt-1">
                    <div class="card">
                        <div class="card-header text-center" id="titulo-plan">{{ plan.name }}</div>
                        <div class="card-body" id="desc-plan">
                            <ul>
                                <li>vCore: {{ plan.vcore }}</li>
                                <li>RAM: {{ plan.ram }} GB</li>
                                <li>Espacio: {{ plan.storage }} GB SSD</li>
                                <li>Velocidad: {{ plan.bus }} Mbit/s</li>
                            </ul>
                            <div class="text-center">
                                <img src="../assets/Icono plan.png" class="img-fluid" id="icono" />
                            </div>
                            <br />
                            <div class="text-center">
                                <button @click="storageIdPlan(plan.id)" class="btn btn-light" id="boton-plan">$ {{ plan.price }} CLP</button>
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
#titulo-plan {
    background-color: #07155E;
    color: white;
    font-size: xx-large;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
}

#desc-plan {
    background-color: rgba(10, 211, 255, 0.5);
    font-size: larger;
    font-weight: 500;
    padding: 35px;
    border-radius: 0 0 5px 5px;
}

#icono {
    height: 50%;
    width: 60%;
}

#boton-plan {
    border-radius: 45px;
    font-size: larger;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    padding: 10px 30px;
}
</style>

<script setup>
import UserNavbar from '@/components/UserNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPlans } from "@/services/service.js"

const router = useRouter();

const plans = ref([]);

plans.value = await getPlans();

function storageIdPlan( idPlan ){
    sessionStorage.setItem( 'plan' , idPlan );
    router.push({ path: '/config-vps' });
}

</script>