<template>
    <nav class="navbar navbar-expand-lg shadow-lg primary-bg-custom">
        <div class="container-fluid">
            <RouterLink to="/">
                <img src="..\assets\Logo de navbar.png" class="left-align img-fluid img-logo" />
            </RouterLink>

            <div class="right-align">
                <button @click="showPopover = !showPopover" class="primary-bg-custom user">
                    <img src="../assets/Avatar.png" class="img-fluid img-avatar" />
                    {{ userData.name }}
                </button>

                <div v-if="showPopover" class="shadow-lg popover">
                    <div class="text-white p-4 primary-bg-custom rounded-3">
                        <p class="text-center">
                            <RouterLink to="/modify-account" class="btn  fw-bold rounded-5" id="btn-option">Modificar
                                perfil</RouterLink>
                        </p>
                        <p class="text-center">
                            <RouterLink to="/suscriptions" class="btn fw-bold rounded-5" id="btn-option">Ver
                                Suscripciones</RouterLink>
                        </p>
                        <p class="text-center">
                            <RouterLink to="/" class="btn fw-bold rounded-5" id="btn-option">Cerrar Sesión</RouterLink>
                        </p>
                    </div>
                </div>
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
    padding-right: 100px;
    font-size: larger;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    border: none;
}

.popover {
    position: absolute;
    border: 1px solid;
    margin: 15px 5px;
    z-index: 999;
    border-radius: 10px;
}

#btn-option {
    background-color: #0AD3FF;
    width: 100%;
    height: 100%;
}
</style>

<script setup>
import { ref } from 'vue';
import { getUserById } from '@/services/service.js';


const userData = ref('');
const showPopover = ref(false);

userData.value = await getUserById(sessionStorage.userId);

</script>