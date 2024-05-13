<template>
    <nav class="navbar navbar-expand-lg shadow-lg primary-bg-custom">
        <div class="container-fluid">
            <RouterLink to="/">
                <img src="..\assets\Logo de navbar.png" class="left-align img-fluid img-logo" />
            </RouterLink>

            <div class="right-align">
                <RouterLink class="user">
                    <img src="../assets/Avatar.png" class="img-fluid img-avatar" />
                    <!--Hay que configurar el get a la Api para obtener los datos del usuario (id y Nombre)-->
                    Usuario
                </RouterLink>
            </div>
        </div>
    </nav>

</template>

<style scoped>
.primary-bg-custom {
    background-color: #07155e;
}

.secondary-text {
    color: #07155e;
}

.img-logo {
    width: 95%;
    height: 5rem;
}

.img-avatar {
    height: 3rem;
}

.user {
    color: white;
    width: 100%;
    margin-right: 100px;
    font-size: larger;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
}
</style>

<script setup>
/*
import {ref} from 'vue';

const userData = ref('');



try {

    const response = await axios.get(); //Se tiene que pasar la id del usuario
    userData.value = response.data;
    console.log(userData.value);
    
} catch (error) {
    console.error('Error al obtener los datos', error);
    alert('Ocurrio un error al obtener los datos del usuario');
}
*/

</script>