<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container-fluid">
            <div class="row justify-content-center p-5">
                <!--Esto se utilizara con los v-for para mostrar los planes obtenidos de la API-->
                <div class="col-md-3 mt-1">
                    <div class="card">
                        <div class="card-header text-center" id="titulo-plan">VPS-1</div>
                        <div class="card-body" id="desc-plan">
                            <ul>
                                <li>vCore: 1</li>
                                <li>RAM: 2GB</li>
                                <li>Espacio: 30 GB SSD</li>
                                <li>Velocidad: 500 Mbit/s</li>
                            </ul>
                            <div class="text-center">
                                <img src="../assets/Icono plan.png" class="img-fluid" id="icono" />
                            </div>
                            <br />
                            <div class="text-center">
                                <a href="configuracion-server.html" class="btn btn-light" id="boton-plan">$ 3.990
                                    CLP</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mt-1">
                    <div class="card">
                        <div class="card-header text-center" id="titulo-plan">VPS-2</div>
                        <div class="card-body" id="desc-plan">
                            <ul>
                                <li>vCore: 2</li>
                                <li>RAM: 4GB</li>
                                <li>Espacio: 60 GB SSD</li>
                                <li>Velocidad: 500 Mbit/s</li>
                            </ul>
                            <div class="text-center">
                                <img src="../assets/Icono plan.png" class="img-fluid" id="icono" />
                            </div>
                            <br />
                            <div class="text-center">
                                <a href="configuracion-server.html" class="btn btn-light" id="boton-plan">$ 6.990
                                    CLP</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 mt-1">
                    <div class="card">
                        <div class="card-header text-center" id="titulo-plan">VPS-3</div>
                        <div class="card-body" id="desc-plan">
                            <ul>
                                <li>vCore: 4</li>
                                <li>RAM: 8GB</li>
                                <li>Espacio: 120 GB SSD</li>
                                <li>Velocidad: 500 Mbit/s</li>
                            </ul>
                            <div class="text-center">
                                <img src="../assets/Icono plan.png" class="img-fluid" id="icono" />
                            </div>
                            <br />
                            <div class="text-center">
                                <a href="configuracion-server.html" class="btn btn-light" id="boton-plan">$ 9.990
                                    CLP</a>
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

// Hay que codificar el get hacia la API para obtener los datos de cada plan
/*
import axios from 'axios';
import {ref} from 'vue';

const plans = ref([]);

try {
    
    const response = await axios.get(); //Hace un get de todos los planes
    plans.value = response.data;
    console.log(plans.value);

} catch (error) {
    console.error('Error al obtener los datos de los planes', error);
    alert('Ocurrio un error al obtener los datos de los planes');
}
*/
</script>