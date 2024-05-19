<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container m-auto">
            <div class="row">
                <div class="col-10 d-flex justify-content-center align-items-center bg-custom">
                    <div class="text-center text-white p-5">
                        <h2>El proceso de compra se ha realizado con exito</h2>
                        <h4>Gracias por preferir nuestros servicios</h4>

                        <RouterLink to="/" class="btn btn-light mt-4" id="return-button">Volver</RouterLink>
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
    background: linear-gradient(#0ad3fe,#0084ff,#0084ff,#0084ff, #0ad3fe);
    border-radius: 25px;
    margin: 5% 9%;
}

#return-button {
    color: #07155E;
    border: none;
    font-weight: 700;
    font-size: large;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

#return-button:hover {
    background-color: #07155E;
    color: white;
    border: none;
    font-weight: 700;
    font-size: large;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>

<script setup>
import UserNavbar from '@/components/UserNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';
</script>