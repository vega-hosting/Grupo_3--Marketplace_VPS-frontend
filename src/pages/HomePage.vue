<template>
    <MainNavbar />

    <div class="container-fluid" id="presentacion">
        <div class="p-5 col-md-6">
            <h3 class="fw-bold">Vega Hosting</h3>
            <br />
            <p class="fw-semibold">
                ¡Bienvenidos a nuestra compañía de vanguardia en servicios de VPS! En
                un mundo digital cada vez más interconectado, ofrecemos soluciones que
                van más allá de las expectativas. Con nuestra tecnología de punta y un
                equipo dedicado, brindamos a nuestros clientes la llave hacia un
                universo de posibilidades infinitas en el mundo virtual. Desde la
                flexibilidad incomparable hasta el rendimiento excepcional, cada uno
                de nuestros servicios de Virtual Private Server (VPS) está diseñado
                para superar las expectativas y llevar tus proyectos al siguiente
                nivel. Únete a nosotros mientras desafiamos los límites de lo que es
                posible en el ciberespacio. ¡El futuro te espera con nuestras
                soluciones de VPS!
            </p>
        </div>
    </div>

    <MainAboutUs />
</template>

<style scoped>
#presentacion {
    background: linear-gradient(to right, #0084ff, #0ad3fe);
    color: #f5f5f5;
}
</style>

<script setup>
import MainNavbar from '@/components/MainNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';
</script>