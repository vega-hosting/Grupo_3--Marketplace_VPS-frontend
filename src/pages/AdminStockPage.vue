<template>
    <div>
        <MainNavbarAdmin />

        <div class="container-fluid">
            <div class="row text-center">
                <!--contenedor opciones-->
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
                <!--contenedor stock-->
                <div class="col rounded-4 fw-bold" id="container">
                    <div class="row">
                        <div class="col text-center">
                            <div id="tittle">
                                <p>stock</p>
                            </div>
                        </div>
                        <!--opcion agregar un nuevo servidor-->
                        <div class="col text-rigth">
                            <router-link to="/agregarProducto">
                                <img src="../assets/agregar-simbolo.png" alt="Imagen agregar" id="add-product">
                            </router-link>
                        </div>
                    </div>

                    <div class="row" id="cards">
                        <!--Primera servidor-->
                        <div class="col-md-4">
                            <div class="card" id="tittle-plan">
                                <div class="card-body">
                                    <h5 class="card-title">VPS-1 (100)</h5>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <ul>
                                        <li>vCore: 1</li>
                                        <li>RAM: 2 GB</li>
                                        <li>Espacio: 30 GB SSD</li>
                                        <li>Velocidad: 500 Mbit/s</li>
                                    </ul>
                                </div>
                                <div class="text-center">
                                    <img src="../assets/Icono plan.png" alt="imagen de servidor" class="img-fluid"
                                        id="icono">
                                </div>
                                <p id="price">$9.990 CLP</p>
                            </div>
                        </div>
                        <!--segundo servidor-->
                        <div class="col-md-4">
                            <div class="card" id="tittle-plan">
                                <div class="card-body">
                                    <h5 class="card-title">VPS-2 (35)</h5>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <ul>
                                        <li>vCore: 2</li>
                                        <li>RAM: 4 GB</li>
                                        <li>Espacio: 60 GB SSD</li>
                                        <li>Velocidad: 500 Mbit/s</li>
                                    </ul>
                                </div>
                                <div class="text-center">
                                    <img src="../assets/Icono plan.png" alt="imagen de servidor" class="img-fluid"
                                        id="icono">
                                </div>
                                <p id="price">$6.990 CLP</p>
                            </div>
                        </div>
                        <!--tercer servidor-->
                        <div class="col-md-4">
                            <div class="card " id="tittle-plan">
                                <div class="card-body ">
                                    <h5 class="card-title">VPS-3 (58)</h5>
                                </div>
                            </div>
                            <div class="card text-center">
                                <div class="card-body">
                                    <ul>
                                        <li>vCore: 4</li>
                                        <li>RAM: 8 GB</li>
                                        <li>Espacio: 120 GB SSD</li>
                                        <li>Velocidad: 500 Mbit/s</li>
                                    </ul>
                                </div>
                                <div class="text-center">
                                    <img src="../assets/Icono plan.png" alt="imagen de servidor" class="img-fluid"
                                        id="icono">
                                </div>
                                <div class="text-center">
                                    <p id="price">$9.990 CLP</p>
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
