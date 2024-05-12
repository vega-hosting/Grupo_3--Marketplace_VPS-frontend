<template>
    <div>
        <MainNavbarAdmin />

        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-md-3 rounded-4" id="container">
                    <img src="../assets/settings.png" id="img-setting" class="img-fluid">

                    <router-link to="/adminStock" class="btn fw-bold btn-light rounded-4 btn-option">Ver
                        Stock</router-link>
                    <br>
                    <br>
                    <router-link to="/opcion2" class="btn fw-bold btn-light rounded-4 btn-option">Opcion 2</router-link>
                    <br>
                    <br>
                    <router-link to="/opcion3" class="btn fw-bold btn-light rounded-4 btn-option">Opcion 3</router-link>
                    <br>
                    <br>
                    <router-link to="/adminGestion" class="btn fw-bold btn-light rounded-4 btn-option">Gestion
                        Usuario</router-link>
                </div>

                <div class="col rounded-4 fw-bold" id="container">
                    <div class="row">
                        <div class="col text-center">
                            <div id="tittle">
                                <p>Ver stock</p>
                            </div>
                        </div>
                        <div class="col text-rigth">
                            <router-link to="/agregarProducto">
                                <img src="../assets/agregar-simbolo.png" alt="Imagen agregar" id="add-product">
                            </router-link>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">VPS 1 (100)</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">VPS 2 (35)</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">VPS 3 (58)</h5>
                                </div>
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
import MainNavbarAdmin from '@/components/MainNavbarAdmin.vue';
</script>

<style scoped>
#container {
    background: linear-gradient(#00ff5e8c, #00ff0031);
    padding: 50px;
    margin: 10px;
}

#tittle {
    background-color: #f0f0f0;
    border-radius: 25px;
    max-width: 20%;
    position: relative;
    left: 90%;
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

.option {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
}
</style>
