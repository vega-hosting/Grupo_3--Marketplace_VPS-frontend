<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container m-auto">
            <div class="row">
                <div class="col-10 d-flex justify-content-center align-items-center bg-custom">
                    <div class="col-md-10 p-3">
                        <h2 class="text-white mb-3">Suscripciones</h2>
                        <h4 class="text-white m-5 text-center">No tienes suscripciones por el momento</h4>
                        <div v-for="suscription in suscriptions" :key="suscription.id" class="col-md-3 mt-1">
                            <div class="card">
                                <div class="card-header text-center"> Tipo: </div>
                                <div class="card-body">
                                    <ul>
                                        <li>Hostname:</li>
                                        <li>Sistema Operativo:</li>
                                        <li>vCore: </li>
                                        <li>RAM:  GB</li>
                                        <li>Espacio:  GB SSD</li>
                                        <li>Velocidad:  Mbit/s</li>
                                    </ul>
                                    <h3>Duracion: </h3>
                                    <h3>Total: $ CLP</h3>
                                </div>
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
.bg-custom {
    background: linear-gradient(#0084ff, #0ad3fe);
    border-radius: 25px;
    margin: 5% 9%;
}
</style>

<script setup>
import UserNavbar from '@/components/UserNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';
</script>