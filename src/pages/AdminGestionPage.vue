<template>
    <div>
        <MainNavbarAdmin />
        <div class="container-fluid ">
            <div class="row text-center">
            <!--contenedor opciones-->
                <div class="col-md-3 rounded-4" id="container">
                    <img src="../assets/settings.png" id="img-setting" class="img-fluid">

                    <router-link to="/adminStock" class="btn fw-bold btn-light rounded-4 btn-option">Ver Stock</router-link>
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
                <!--contenedor gestion-->
                <div class="col rounded-4 fw-bold" id="container">
                    <div id="tittle">
                        <p>Gestion usuarios</p>
                    </div>
                    <div class="row ">
                        <div class="col-sm-4">
                            <div class="user-card">
                                <img src="../assets/Avatar.png" class="user-image" @click="showDeleteConfirmation(1)">
                                <p>Usuario 1</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="user-card">
                                <img src="../assets/Avatar.png" class="user-image" @click="showDeleteConfirmation(2)">
                                <p>Usuario 2</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="user-card">
                                <img src="../assets/Avatar.png" class="user-image" @click="showDeleteConfirmation(3)">
                                <p>Usuario 3</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="user-card">
                                <img src="../assets/Avatar.png" class="user-image" @click="showDeleteConfirmation(4)">
                                <p>Usuario 4</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="user-card">
                                <img src="../assets/Avatar.png" class="user-image" @click="showDeleteConfirmation(5)">
                                <p>Usuario 5</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="user-card">
                                <img src="../assets/Avatar.png" class="user-image" @click="showDeleteConfirmation(6)">
                                <p>Usuario 6</p>
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

/*const showDeleteConfirmation = (userId) => {
    //funcion que elimine un usuario??
    console.log("Delete user con ID:", userId);
}*/

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
    left: 40%;
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

.option {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
}

.user-card {
    margin-bottom: 20px;
}

.user-image {
    width: 100%;
    cursor: pointer;
}

.user-card {
    margin-bottom: 50px;
    margin-top: 10px;
    width: 150px;
    position: relative;
    left: 5rem;
}
</style>
