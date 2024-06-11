<template>
    <div>
        <UserNavbarAdmin />
        <div class="container-fluid">
            <div class="row text-center">
                <!-- Contenedor de opciones -->
                <div class="col-md-3 rounded-4" id="container">
                    <img src="../assets/settings.png" id="img-setting" class="img-fluid" />
                    <router-link to="/adminStock" class="btn fw-bold btn-light rounded-4 btn-option">Ver
                        Stock</router-link>
                    <br /><br />
                    <router-link to="/opcion2" class="btn fw-bold btn-light rounded-4 btn-option">Opción 2</router-link>
                    <br /><br />
                    <router-link to="/opcion3" class="btn fw-bold btn-light rounded-4 btn-option">Opción 3</router-link>
                    <br /><br />
                    <router-link to="/adminGestion" class="btn fw-bold btn-light rounded-4 btn-option">Gestión
                        Usuario</router-link>
                </div>
                <!-- Contenedor de gestión -->
                <div class="col rounded-4 fw-bold" id="container">
                    <div id="title">
                        <p>Gestión usuarios</p>
                    </div>
                    <div class="row">
                        <div v-for="user in users" :key="user.id" class="col-sm-4 position-relative">
                            <div class="user-card">
                                <img src="../assets/Avatar.png" class="user-image"
                                    @click="showDeleteConfirmation(user.id, $event)" />
                                <p>{{ user.name }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Ventana eliminar usuario -->
                    <div v-if="showPopover" class="shadow-lg popover" id="windows" :style="popoverStyles">
                        <div class="text-white p-2 primary-bg-custom rounded-3">
                            <p class="text-center fw-semibold fs-6">¿Eliminar usuario?</p>
                            <p class="text-center">
                                <button @click="deleteUser" id="boton-usuario-popover"
                                    class="btn btn-danger fw-bold rounded-5 btn-m">
                                    Eliminar
                                </button>
                                <button @click="showPopover = false" id="boton-usuario-cancelar"
                                    class="btn fw-bold rounded-5 btn-light btn-m">
                                    Cancelar
                                </button>
                            </p>
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
import UserNavbarAdmin from '@/components/UserNavbarAdmin.vue';
import { ref, onMounted } from 'vue';
import { getUsers, deleteUserById } from "@/services/service.js";

const showPopover = ref(false);
const users = ref([]);
const selectedUserId = ref(null);
const popoverStyles = ref({});

onMounted(async () => {
    try {
        users.value = await getUsers();
    } catch (error) {
        console.error('Error al obtener los datos de los usuarios', error);
        alert('Ocurrió un error al obtener los datos de los usuarios');
    }
});

const showDeleteConfirmation = (userId, event) => {
    selectedUserId.value = userId;
    const rect = event.target.getBoundingClientRect();
    popoverStyles.value = {
        top: `${rect.top + window.scrollY}px`,
        left: `${rect.right + window.scrollX + 10}px`
    };
    showPopover.value = true;
};

const deleteUser = async () => {
    try {
        await deleteUserById(selectedUserId.value);
        users.value = users.value.filter(user => user.id !== selectedUserId.value);
        showPopover.value = false;
    } catch (error) {
        console.error('Error al eliminar el usuario', error);
        alert('Ocurrió un error al eliminar el usuario');
    }
};
</script>

<style scoped>
#container {
    background: linear-gradient(#00ff5e8c, #00ff0031);
    padding: 50px;
    margin: 10px;
}

#windows {
    background-color: green;
    border-radius: 15px;
    position: absolute;
    z-index: 1000;
}

#boton-usuario-popover,
#boton-usuario-cancelar {
    width: 150px;
    height: 40px;
    margin: 5px;
}

#title {
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
